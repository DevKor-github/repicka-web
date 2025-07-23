// wsClient.connect 이런 식으로 사용하기

const WS_BASE_URL = import.meta.env.VITE_WS_URL as string;

type MessageHandler = (event: MessageEvent) => void;

class WebSocketClient {
  private socket: WebSocket | null = null;
  private reconnectDelay = 1000; // ms
  private messageHandlers: MessageHandler[] = [];

  connect(params: Record<string, string>) {
    const query = new URLSearchParams(params).toString();
    const url = `${WS_BASE_URL}?${query}`;

    this.socket = new WebSocket(url);

    this.socket.onopen = () => {
      console.log('WebSocket 연결됨');
    };

    this.socket.onmessage = event => {
      this.messageHandlers.forEach(handler => handler(event));
    };

    this.socket.onclose = () => {
      console.warn('WebSocket 연결 종료됨. 재연결 시도 중..');
      setTimeout(() => this.connect(params), this.reconnectDelay);
    };

    this.socket.onerror = err => {
      console.error('WebSocket 에러:', err);
      this.socket?.close();
    };
  }

  // TODO: send api 아직 안 만들어져서 data 타입 정의하기 어려움. 추후 추가
  //   send(data: any) {
  //     if (this.socket?.readyState === WebSocket.OPEN) {
  //       this.socket.send(JSON.stringify(data));
  //     } else {
  //       console.warn('WebSocket 연결 아직 안 됨. 메시지 보류됨');
  //     }
  //   }

  addMessageHandler(handler: MessageHandler) {
    this.messageHandlers.push(handler);
  }

  close() {
    this.socket?.close();
  }
}

const wsClient = new WebSocketClient();
export default wsClient;
