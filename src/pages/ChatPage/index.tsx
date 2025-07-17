import SafeArea from '@/common/components/SafeArea';
import * as s from './style.css';
import ChatList from '@/features/chat/components/ChatList';
import MainTopBar from '@/common/components/MainTopBar';

const ChatPage = () => {
  return (
    <SafeArea>
      <MainTopBar />
      <div className={s.Wrapper}>
        {/* TODO: 불러오기 */}
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
        <ChatList />
      </div>
    </SafeArea>
  );
};

export default ChatPage;
