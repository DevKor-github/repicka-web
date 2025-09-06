import SafeArea from '@/common/components/SafeArea';
import * as s from './style.css';
import ChatList from '@/features/chatList/components/ChatList';
import useGetChatList from '@/features/chatList/api/useGetChatList';
import Pagination from '@/common/components/Pagination';
import { CHAT_PAGING_SIZE } from '@/libs/constants';
import NoResult from '@/common/components/NoResult';
import MainTopBar from '@/common/components/MainTopBar';

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
      <MainTopBar />
      <div className={s.Wrapper({ isEmpty })}>
        {isEmpty ? (
          <NoResult type="chat-list" />
        ) : (
          <Pagination
            fetchNextPage={fetchNextPage}
            items={rooms}
            render={item => <ChatList key={item.chatRoomId} data={item} />}
            hasNextPage={hasNextPage}
            isFetchingNextPage={isFetchingNextPage}
          />
        )}
      </div>
    </SafeArea>
  );
};

export default ChatPage;
