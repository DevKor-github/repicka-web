import SafeArea from '@/common/components/SafeArea';
import * as s from './style.css';
import ChatList from '@/features/chatList/components/ChatList';
import useGetChatList from '@/features/chatList/api/useGetChatList';
import ChatTopBar from '@/features/chatList/components/ChatTopBar';
import Pagination from '@/common/components/Pagination';
import { CHAT_PAGING_SIZE } from '@/libs/constants';
import { useEffect } from 'react';
import { connectSocket, subChatListSocket } from '@/common/utils/wsClient';
import { useQueryClient } from '@tanstack/react-query';

const ChatPage = () => {
  const {
    data: rooms = [],
    isSuccess,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetChatList({
    pageSize: CHAT_PAGING_SIZE,
  });
  const queryClient = useQueryClient();

  const isEmpty = isSuccess && rooms.length === 0;

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    connectSocket().then(() => {
      unsubscribe = subChatListSocket(() => {
        queryClient.invalidateQueries({ queryKey: ['chat-list'] });
      });
    });

    return () => {
      unsubscribe?.();
    };
  }, []);

  return (
    <SafeArea>
      <ChatTopBar />
      <div className={s.Wrapper}>
        {!isEmpty && (
          <Pagination
            fetchNextPage={fetchNextPage}
            items={rooms}
            render={item => <ChatList data={item} />}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        )}
      </div>
    </SafeArea>
  );
};

export default ChatPage;
