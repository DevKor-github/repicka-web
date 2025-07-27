// 이 페이지로 들어오는 link 부모 컴포넌트에서 chatRoomId를 주니까,
// 거기에서 받아서 이 페이지로 들어오면서 post 요청 쏘기
// 그리고 chatRoomContent로 res.data 전달해 줘야 함

import ChatRoomContent from '@/features/chatRoom/components/ChatRoomLayout/ChatRoomContent';
import ChatRoomFooter from '@/features/chatRoom/components/ChatRoomLayout/ChatRoomFooter';
import ChatRoomHeader from '@/features/chatRoom/components/ChatRoomLayout/ChatRoomHeader';

import * as s from './style.css';
import SafeArea from '@/common/components/SafeArea';
import { useParams } from 'react-router';
import { usePostChatRoom } from '@/features/chat/apis/usePostChatRoom';
import { useEffect } from 'react';

export const ChatRoomPage = () => {
  const { chatRoomId } = useParams();
  const { mutate, data } = usePostChatRoom();

  useEffect(() => {
    mutate({ chatRoomId: Number(chatRoomId) });
  }, [chatRoomId]);

  console.log(data);

  return (
    <SafeArea>
      <div className={s.entireLayout}>
        <ChatRoomHeader />
        <div className={s.innerPage}>
          <ChatRoomContent />
        </div>
        <ChatRoomFooter />
      </div>
    </SafeArea>
  );
};

export default ChatRoomPage;
