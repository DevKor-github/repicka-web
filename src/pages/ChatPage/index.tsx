import SafeArea from '@/common/components/SafeArea';
import * as s from './style.css';
import ChatList from '@/features/chat/components/ChatList';
import MainTopBar from '@/common/components/MainTopBar';
import { useGetChatList } from '@/features/chat/apis/useGetChatList';

const ChatPage = () => {
  const { data, isLoading, error } = useGetChatList();

  return (
    <SafeArea>
      <MainTopBar />
      <div className={s.Wrapper}>
        {isLoading && <div>Loading...</div>}
        {error && <div>잘못된 접근입니다.</div>}

        {data?.map(chat => (
          <ChatList
            key={chat.chatRoomId}
            chatRoomId={chat.chatRoomId}
            nickName={chat.opponentNickname}
            message={chat.mostRecentChat ?? '대화를 시작해 보세요!'}
            count={0}
            isVerified={chat.isOpponentKorean}
          />
        ))}
      </div>
    </SafeArea>
  );
};

export default ChatPage;
