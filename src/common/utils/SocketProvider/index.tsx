import { useEffect } from 'react';
import { connectSocket, subChatListSocket } from '@/common/utils/wsClient';
import { useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/libs/queryKeys';
import { useUnreadChatStore } from '@/common/store/UnreadChatStore';
import { useInAppNotificaiton } from '@/common/hooks/useInAppNotification';
import { useLocation } from 'react-router';

interface Props {
  children: React.ReactNode;
}

const SocketProvider = ({ children }: Props) => {
  const queryClient = useQueryClient();
  const setUnreadChatCount = useUnreadChatStore(state => state.setUnreadChatCount);
  const { openNotification } = useInAppNotificaiton();
  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    connectSocket()
      .then(() => {
        console.log('앱 시작 시 WebSocket 연결 완료');
        unsubscribe = subChatListSocket(data => {
          queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CHAT_LIST] });
          if (data.type === 'UNREAD_CHAT_COUNT') setUnreadChatCount(data.message.unreadChatCount);
          if (data.type === 'CHAT') {
            if (location.pathname.startsWith('/chat')) {
              return;
            }

            const content = data.message.mostRecentChatContent;
            const nickname = data.message.mostRecentChatNickname;
            const profileImage = data.message.opponentProfileImageUrl;
            const chatRoomId = data.message.chatRoomId;

            openNotification({ content, nickname, profileImage, chatRoomId });
          }
        });
      })
      .catch(err => {
        console.error('WebSocket 연결 실패:', err);
      });

    return () => {
      unsubscribe?.();
    };
  }, [queryClient, setUnreadChatCount, location.pathname]);

  return <>{children}</>;
};

export default SocketProvider;
