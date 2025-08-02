import SafeArea from '@/common/components/SafeArea';
import * as s from './style.css';
import ChatList from '@/features/chatList/components/ChatList';
import MainTopBar from '@/common/components/MainTopBar';
import { useEffect, useState } from 'react';
import useGetChatList from '@/features/chatList/api/useGetChatList';
import type { ChatRoom } from '@/features/chatList/types';

const ChatPage = () => {
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);

  const { data } = useGetChatList();

  // REST API로 받아온 채팅 리스트 저장해 두기
  useEffect(() => {
    if (data?.data?.chatRooms) {
      setChatRooms(data.data.chatRooms);
    }
  }, [data]);

  return (
    <SafeArea>
      <MainTopBar />
      <div className={s.Wrapper}>
        {/* TODO: 불러오기 */}
        {chatRooms.map((data, index) => (
          <ChatList
            key={index}
            count={0}
            recentChat={data.mostRecentChat}
            nickName={data.opponentNickname}
            chatRoomId={data.chatRoomId}
            isVerified={data.isOpponentKorean}
            profileImageUrl={data.opponentProdileImageUrl}
            lastChatAt={data.lastChatAt}
          />
        ))}
        <ChatList
          chatRoomId={123}
          count={0}
          isVerified={true}
          nickName="404 에러"
          profileImageUrl={undefined}
          recentChat=""
          lastChatAt=""
        />
        <ChatList
          chatRoomId={2}
          count={0}
          isVerified={true}
          nickName="내 거 아니다 403 에러"
          profileImageUrl={undefined}
          recentChat=""
          lastChatAt=""
        />
      </div>
    </SafeArea>
  );
};

export default ChatPage;
