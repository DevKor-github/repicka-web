import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const wsClient = new Client({
  webSocketFactory: () => new SockJS(import.meta.env.VITE_WS_URL),
  reconnectDelay: 5000,
});

export default wsClient;
