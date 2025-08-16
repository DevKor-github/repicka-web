import type { SubChatListInterface } from '@/features/chatList/types';
import type { SubChatRoomInterface } from '@/features/chatRoom/types';
import { Stomp, type Frame, type IFrame, type StompSubscription } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const wsUrl = import.meta.env.VITE_WS_URL || '';
const socket = new SockJS(wsUrl);
const stompClient = Stomp.over(socket);

// --------- ChatRoom per-room subscriptions ---------
const subChatRooms = new Map<number, StompSubscription>();

export const subChatRoomSocket = (chatRoomId: number, callback: (data: SubChatRoomInterface) => void) => {
  if (!stompClient.connected) return;

  // 중복 구독 방지
  const prev = subChatRooms.get(chatRoomId);
  prev?.unsubscribe();

  const sub = stompClient.subscribe(`/sub/chatroom/${chatRoomId}`, message => {
    const data = JSON.parse(message.body) as SubChatRoomInterface;
    callback(data);
  });

  subChatRooms.set(chatRoomId, sub);

  return () => {
    sub.unsubscribe();
    subChatRooms.delete(chatRoomId);
    console.log('언마운트된 채팅방 구독 해제');
  };
};

// --------- ChatList global subscription (single) ---------
let chatListSub: StompSubscription | null = null;
const chatListListeners = new Set<(data: SubChatListInterface) => void>();

/** 내부용: 실제 STOMP 구독 시작 (이미 있으면 스킵) */
const startChatListSubscription = () => {
  if (!stompClient.connected || chatListSub) return;

  chatListSub = stompClient.subscribe('/user/sub', message => {
    const data = JSON.parse(message.body) as SubChatListInterface;
    chatListListeners.forEach(cb => cb(data));
  });

  console.log('📬 ChatList 구독 시작');
};

/** 내부용: 구독 해제 */
const stopChatListSubscription = () => {
  chatListSub?.unsubscribe();
  chatListSub = null;
  console.log('📪 ChatList 구독 해제');
};

/**
 * 외부 API: ChatList 스트림 리스너 등록
 * - 소켓이 이미 연결되어 있으면 즉시 구독 시작
 * - 연결되기 전이면 onConnect에서 자동 시작
 * - 반환된 함수 호출하면 해당 리스너만 제거
 */
export const subChatListSocket = (callback: (data: SubChatListInterface) => void) => {
  chatListListeners.add(callback);
  // 연결돼 있으면 바로 보장
  startChatListSubscription();

  return () => {
    chatListListeners.delete(callback);
    // 더 이상 리스너가 없으면 구독도 정리 (메모리/트래픽 절약)
    if (chatListListeners.size === 0) {
      stopChatListSubscription();
    }
  };
};

// --------- Connect / Disconnect ----------
export const connectSocket = () => {
  return new Promise((resolve, reject) => {
    if (stompClient.connected) {
      resolve(true);
      return;
    }

    // 연결 성공 시점에 글로벌 ChatList 구독 보장
    // (재연결 시에도 자동 재구독)
    stompClient.onConnect = _frame => {
      console.log('WebSocket onConnect');
      startChatListSubscription(); // 여기서 자동 구독
      resolve(true);
    };

    stompClient.onStompError = frame => {
      console.error('STOMP Error:', frame);
    };

    stompClient.connect(
      {},
      // 구버전 콜백 (onConnect가 이미 있으므로 여기선 noop 가능)
      (_frame: IFrame) => {},
      (error: Frame | CloseEvent) => {
        console.error('WebSocket 연결 실패', error);
        reject(error);
      },
    );
  });
};

export const disconnectSocket = () => {
  if (stompClient && stompClient.connected) {
    // 끊기 전에 글로벌 구독 해제
    stopChatListSubscription();

    // 룸 구독들도 정리
    subChatRooms.forEach(sub => sub.unsubscribe());
    subChatRooms.clear();

    stompClient.disconnect(() => {
      console.log('🛑 WebSocket 연결 해제 완료');
    });
  }
};

// 연결 끊김 이벤트 (서버/네트워크 사유 등)
stompClient.onWebSocketClose = (event: CloseEvent) => {
  console.warn('💥 WebSocket 연결 끊김:', event);

  // 안전: 소켓이 비정상 종료되었을 때도 구독 핸들 정리
  stopChatListSubscription();
  subChatRooms.forEach(sub => sub.unsubscribe());
  subChatRooms.clear();
};

export { stompClient };
