// 이 페이지로 들어오는 link 부모 컴포넌트에서 chatRoomId를 주니까,
// 거기에서 받아서 이 페이지로 들어오면서 post 요청 쏘기
// 그리고 chatRoomContent로 res.data 전달해 줘야 함

import ChatRoomContent from '@/features/chatRoom/components/ChatRoomLayout/ChatRoomContent';
import ChatRoomFooter from '@/features/chatRoom/components/ChatRoomLayout/ChatRoomFooter';
import ChatRoomHeader from '@/features/chatRoom/components/ChatRoomLayout/ChatRoomHeader';

import * as s from './style.css';
import SafeArea from '@/common/components/SafeArea';
import { useParams } from 'react-router';
// import useGetChatRoom from '@/features/chatRoom/api/useGetChatRoom';
import { usePostChatList } from '@/features/chatRoom/api/usePostChatList';
import { useEffect, useState } from 'react';
import type { Message } from '@stomp/stompjs';
// import wsClient from '@/common/utils/wsClient';

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
      setMessages(data.data.chat.messages);
    }
  }, [data]);

  // Socket 연결해서 구독하고, REST API로 저장해 둔 메시지에 붙이기
  // useEffect(() => {
  //   if (!chatRoomIdNumber || !wsClient.connected) return;

  //   const subscription = wsClient.subscribe(
  //     `/sub/chatroom/${chatRoomIdNumber}`,
  //     (message) => {
  //       const msgData: Message = JSON.parse(message.body);
  //       setMessages((prev) => [...prev, msgData]);
  //     }
  //   );

  //   return () => subscription.unsubscribe();
  // }, [chatRoomIdNumber, wsClient.connected]);

  if (data === undefined) return <div>잘못된 접근입니다</div>;

  return (
    <SafeArea>
      <div className={s.entireLayout}>
        <ChatRoomHeader data={data?.data} />
        <div className={s.innerPage}>{/* <ChatRoomContent data={data?.data} messages={messages}/> */}</div>
        <ChatRoomFooter />
      </div>
    </SafeArea>
  );
};

export default ChatRoomPage;
