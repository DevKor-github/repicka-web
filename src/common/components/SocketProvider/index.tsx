import { useEffect } from 'react';
import { connectSocket } from '@/common/utils/wsClient';

interface Props {
  children: React.ReactNode;
}

const SocketProvider = ({ children }: Props) => {
  useEffect(() => {
    connectSocket()
      .then(() => {
        console.log('앱 시작 시 WebSocket 연결 완료');
      })
      .catch(err => {
        console.error('WebSocket 연결 실패:', err);
      });
  }, []);

  return <>{children}</>;
};

export default SocketProvider;
