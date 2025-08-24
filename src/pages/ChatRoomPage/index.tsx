import { useParams } from 'react-router';

import ChatRoomHeader from '@/features/chatRoom/components/ChatRoomLayout/ChatRoomHeader';
import ChatRoomContent from '@/features/chatRoom/components/ChatRoomLayout/ChatRoomContent';
import ChatRoomFooter from '@/features/chatRoom/components/ChatRoomLayout/ChatRoomFooter';

import * as s from './style.css';
import SafeArea from '@/common/components/SafeArea';
import { useGetChatRoom } from '@/features/chatRoom/api/useGetChatRoom';
import ItemInfo from '@/features/chatRoom/components/ItemInfo';
import NotFoundPage from '@/pages/NotFoundPage';

const ChatRoomPage = () => {
  const { chatRoomId } = useParams();
  const chatRoomIdNumber = Number(chatRoomId);

  const { data: chatRoomInfo, isLoading, isError } = useGetChatRoom(chatRoomIdNumber);

  if (isLoading) return <div>로딩 중..</div>;

  if (isError || !chatRoomInfo) return <NotFoundPage />;

  return (
    <SafeArea>
      <div className={s.entireLayout}>
        <ChatRoomHeader data={chatRoomInfo.chatRoom} />
        <ItemInfo data={chatRoomInfo.item} />
        <div className={s.innerPage}>
          <ChatRoomContent data={chatRoomInfo.chatRoom} />
        </div>
        <ChatRoomFooter data={chatRoomInfo.chatRoom} />
      </div>
    </SafeArea>
  );
};

export default ChatRoomPage;
