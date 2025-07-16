import ChatRoomContent from '@/features/chatRoom/components/ChatRoomLayout/ChatRoomContent';
import ChatRoomFooter from '@/features/chatRoom/components/ChatRoomLayout/ChatRoomFooter';
import ChatRoomHeader from '@/features/chatRoom/components/ChatRoomLayout/ChatRoomHeader';

import * as s from './style.css';

export const ChatRoomPage = () => {
  return (
    <div className={s.entireLayout}>
      <ChatRoomHeader />
      <div className={s.innerPage}>
        <ChatRoomContent />
      </div>
      <ChatRoomFooter />
    </div>
  );
};

export default ChatRoomPage;
