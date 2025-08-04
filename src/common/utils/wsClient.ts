import type { Message } from '@/features/chatRoom/types';
import { Stomp, type Frame, type IFrame, type StompSubscription } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const wsUrl = import.meta.env.VITE_WS_URL || '';
const socket = new SockJS(wsUrl);
const stompClient = Stomp.over(socket);

export const connectSocket = () => {
  return new Promise((resolve, reject) => {
    if (stompClient.connected) {
      resolve(true);
      return;
    }

    // 소켓 연결이 안 되어 있다면 연결 시도
    stompClient.connect(
      {},
      (frame: IFrame) => {
        console.log('WebSocket 연결 완료', frame);
        resolve(true);
      },
      (error: Frame | CloseEvent) => {
        console.error('WebSocket 연결 실패', error);
        reject(error);
      },
    );
  });
};

// 소켓 연결 해제 함수
export const disconnectSocket = () => {
  if (stompClient && stompClient.connected) {
    stompClient.disconnect(() => {
      console.log('🛑 WebSocket 연결 해제 완료');
    });
  }
};

// Socket 연결 끊어졌을 때 호출되는 함수
stompClient.onWebSocketClose = (event: CloseEvent) => {
  // isConnected = false;
  console.warn('💥 WebSocket 연결 끊김:', event);
};

const subscriptions = new Map<number, StompSubscription>();

export const subSocket = (chatRoomId: number, callback: (data: Message) => void) => {
  if (!stompClient.connected) return;

  // 이전 구독이 있다면 해제 (중복 구독 방지)
  const prev = subscriptions.get(chatRoomId);
  prev?.unsubscribe();

  const subscription = stompClient.subscribe(`/sub/chatroom/${chatRoomId}`, message => {
    const data = JSON.parse(message.body);
    callback(data);
  });

  subscriptions.set(chatRoomId, subscription);

  return () => {
    subscription.unsubscribe();
    subscriptions.delete(chatRoomId);
    console.log('언마운트된 채팅방 구독 해제');
  };
};

export { stompClient };
