import { useEffect } from 'react';
import { connectSocket, subChatListSocket } from '@/common/utils/wsClient';
import { useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/libs/queryKeys';
import { useUnreadChatStore } from '@/common/store/UnreadChatStore';

interface Props {
  children: React.ReactNode;
}

const SocketProvider = ({ children }: Props) => {
  const queryClient = useQueryClient();
  const setUnreadChatCount = useUnreadChatStore(state => state.setUnreadChatCount);

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    connectSocket()
      .then(() => {
        console.log('앱 시작 시 WebSocket 연결 완료');
        unsubscribe = subChatListSocket(data => {
          queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CHAT_LIST] });
          setUnreadChatCount(data.message.unreadChatCount);
        });
      })
      .catch(err => {
        console.error('WebSocket 연결 실패:', err);
      });

    return () => {
      unsubscribe?.();
    };
  }, [queryClient]);

  return <>{children}</>;
};

export default SocketProvider;
