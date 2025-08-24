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
import { QUERY_KEYS } from '@/libs/queryKeys';
import NoResult from '@/common/components/NoResult';

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
        queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.CHAT_LIST] });
      });
    });

    return () => {
      unsubscribe?.();
    };
  }, []);

  return (
    <SafeArea>
      <ChatTopBar />
      <div className={s.Wrapper({ isEmpty })}>
        {isEmpty ? (
          <NoResult type="chat-list" />
        ) : (
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
