import type { SubChatListInterface } from '@/features/chatList/types';
import type { SubChatRoomInterface } from '@/features/chatRoom/types';
import { Client } from '@stomp/stompjs';
import type { IFrame, StompSubscription } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const wsUrl = import.meta.env.VITE_WS_URL || '';

/** STOMP Client 초기화 */
const stompClient = new Client({
  webSocketFactory: () => new SockJS(wsUrl),
  reconnectDelay: 5000, // 자동 재연결
  debug: str => console.log('[STOMP]', str),
});

// --------- ChatRoom per-room subscriptions ---------
const subChatRooms = new Map<number, StompSubscription>();

export const subChatRoomSocket = (chatRoomId: number, callback: (data: SubChatRoomInterface) => void) => {
  if (!stompClient.connected) return;

  // 중복 구독 방지
  const prev = subChatRooms.get(chatRoomId);
  if (prev) {
    prev.unsubscribe();
    subChatRooms.delete(chatRoomId);
    console.log(`♻️ 기존 ChatRoom ${chatRoomId} 구독 해제 후 재구독`);
  }

  const sub = stompClient.subscribe(`/sub/chatroom/${chatRoomId}`, message => {
    const data = JSON.parse(message.body) as SubChatRoomInterface;
    callback(data);
  });

  subChatRooms.set(chatRoomId, sub);
  console.log(`📬 ChatRoom ${chatRoomId} 구독 시작`);

  return () => {
    sub.unsubscribe();
    subChatRooms.delete(chatRoomId);
    console.log(`📪 ChatRoom ${chatRoomId} 구독 해제`);
  };
};

// --------- ChatList global subscription (single) ---------
let subChatList: StompSubscription | null = null;

export const subChatListSocket = (callback: (data: SubChatListInterface) => void) => {
  if (!stompClient.connected) return;

  // 중복 구독 방지
  subChatList?.unsubscribe();

  console.log(`♻️ 기존 ChatList 구독 해제 후 재구독`);

  subChatList = stompClient.subscribe('/user/sub', message => {
    const data = JSON.parse(message.body) as SubChatListInterface;
    console.log(data);
    callback(data);
  });

  console.log(`📬 ChatList 구독 시작`);

  return () => {
    subChatList?.unsubscribe();
    subChatList = null;
    console.log(`📪 ChatList 구독 해제`);
  };
};

// --------- Connect / Disconnect ----------
export const connectSocket = () => {
  return new Promise((resolve, reject) => {
    if (stompClient.active) {
      console.log('이미 연결 활성화됨');
      resolve(true);
      return;
    }

    stompClient.onConnect = (_frame: IFrame) => {
      console.log('✅ STOMP Connected');
      resolve(true);
    };

    stompClient.onStompError = frame => {
      console.error('❌ STOMP Error:', frame);
      reject(frame);
    };

    stompClient.onWebSocketClose = event => {
      console.warn('💥 WebSocket Closed', event);
      subChatRooms.forEach(sub => sub.unsubscribe());
      subChatRooms.clear();
    };

    stompClient.activate(); // 연결 시작
  });
};

export const disconnectSocket = () => {
  if (stompClient.active) {
    subChatRooms.forEach(sub => sub.unsubscribe());
    subChatRooms.clear();

    stompClient.deactivate().then(() => {
      console.log('🛑 STOMP Disconnected');
    });
  }
};

export { stompClient };
