import SafeArea from '@/common/components/SafeArea';
import * as s from './style.css';
import ChatList from '@/features/chat/components/ChatList';

const ChatPage = () => {
  return (
    <SafeArea>
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
        <ChatList />
      </div>
    </SafeArea>
  );
};

export default ChatPage;
