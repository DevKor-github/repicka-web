import ChatRoomContent from '@/features/chatRoom/components/ChatRoomLayout/ChatRoomContent';
import ChatRoomFooter from '@/features/chatRoom/components/ChatRoomLayout/ChatRoomFooter';
import ChatRoomHeader from '@/features/chatRoom/components/ChatRoomLayout/ChatRoomHeader';

import * as s from './style.css';
import SafeArea from '@/common/components/SafeArea';
import { useParams } from 'react-router';
// import useGetChatRoom from '@/features/chatRoom/api/useGetChatRoom';
import { usePostChatList } from '@/features/chatRoom/api/usePostChatList';
import { useEffect, useState } from 'react';
import type { Message } from '@/features/chatRoom/types';
import { stompClient } from '@/common/utils/wsClient';

export const ChatRoomPage = () => {
  const { chatRoomId } = useParams();
  const chatRoomIdNumber = Number(chatRoomId);
  // TODO: POST -> GET으로 메소드 변경
  // const { data } = useGetChatRoom(chatRoomIdNumber);

  const { mutate, data } = usePostChatList();
  const [messages, setMessages] = useState<Message[]>([]);

  // REST API 붙이기
  useEffect(() => {
    if (!isNaN(chatRoomIdNumber)) {
      mutate(chatRoomIdNumber);
    }
  }, [chatRoomIdNumber, mutate]);

  // REST API로 받아온 메시지 저장해 두기
  useEffect(() => {
    if (data?.data?.chat?.messages) {
      setMessages(data.data.chat.messages.slice().reverse());
    }
  }, [data]);

  // Socket 연결해서 구독하고, REST API로 저장해 둔 메시지에 붙이기
  useEffect(() => {
    const subscription = stompClient.subscribe('/sub/chatroom/1', message => {
      const data = JSON.parse(message.body);

      setMessages(prev => [...prev, data]);
    });

    return () => {
      subscription.unsubscribe(); // 컴포넌트 언마운트 시 구독 해제
    };
  }, []);

  if (data === undefined) return <div>잘못된 접근입니다</div>;

  return (
    <SafeArea>
      <div className={s.entireLayout}>
        <ChatRoomHeader data={data?.data} />
        <div className={s.innerPage}>
          <ChatRoomContent data={data?.data} messages={messages} />
        </div>
        <ChatRoomFooter chatRoomId={data?.data.chatRoom.chatRoomId} />
      </div>
    </SafeArea>
  );
};

export default ChatRoomPage;
