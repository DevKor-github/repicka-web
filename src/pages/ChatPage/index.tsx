import SafeArea from '@/common/components/SafeArea';
import * as s from './style.css';
import ChatList from '@/features/chatList/components/ChatList';
import Pagination from '@/common/components/Pagination';
import { CHAT_PAGING_SIZE } from '@/libs/constants';
import useGetChatList from '@/features/chatList/api/useGetChatList';
import ChatTopBar from '@/features/chatList/components/ChatTopBar';

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

  const isEmpty = isSuccess && rooms.length === 0;

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
