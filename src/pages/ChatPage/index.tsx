import SafeArea from '@/common/components/SafeArea';
import * as s from './style.css';
import ChatList from '@/features/chatList/components/ChatList';
import { useEffect, useState } from 'react';
import useGetChatList from '@/features/chatList/api/useGetChatList';
import type { ChatRoom } from '@/features/chatList/types';
import ChatTopBar from '@/features/chatList/components/ChatTopBar';
// import { ChatTopBar } from '@/features/chatList/components/ChatTopBar';

const ChatPage = () => {
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);

  const { data } = useGetChatList();

  console.log(data);
  // REST API로 받아온 채팅 리스트 저장해 두기
  useEffect(() => {
    if (data?.data?.chatRooms) {
      setChatRooms(data.data.chatRooms);
    }
  }, [data]);

  return (
    <SafeArea>
      <ChatTopBar />
      <div className={s.Wrapper}>
        {chatRooms.map(data => (
          <ChatList data={data} />
        ))}
      </div>
    </SafeArea>
  );
};

export default ChatPage;
