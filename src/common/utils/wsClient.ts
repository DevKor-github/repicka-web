import { Stomp, type Frame, type IFrame } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const socket = new SockJS(import.meta.env.VITE_WS_URL);
const stompClient = Stomp.over(socket);

let isConnected = false;

export const connectSocket = () => {
  return new Promise((resolve, reject) => {
    if (isConnected) {
      resolve(true);
      return;
    }

    stompClient.connect(
      {},
      (frame: IFrame) => {
        console.log('WebSocket 연결 완료', frame);
        isConnected = true;
        resolve(true);
      },
      (error: Frame | CloseEvent) => {
        console.error('WebSocket 연결 실패', error);
        reject(error);
      },
    );
  });
};

export { stompClient };
