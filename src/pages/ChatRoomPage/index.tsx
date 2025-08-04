import ChatRoomContent from '@/features/chatRoom/components/ChatRoomLayout/ChatRoomContent';
import ChatRoomFooter from '@/features/chatRoom/components/ChatRoomLayout/ChatRoomFooter';
import ChatRoomHeader from '@/features/chatRoom/components/ChatRoomLayout/ChatRoomHeader';

import * as s from './style.css';
import SafeArea from '@/common/components/SafeArea';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useMemo, useState } from 'react';
import type { Message } from '@/features/chatRoom/types';
import { connectSocket, subSocket } from '@/common/utils/wsClient';
import Chip from '@/common/components/Chip';
import useGetChatRoom from '@/features/chatRoom/api/useGetChatRoom';

export const ChatRoomPage = () => {
  const navigate = useNavigate();
  const { chatRoomId } = useParams();
  const chatRoomIdNumber = Number(chatRoomId);

  const { data } = useGetChatRoom(chatRoomIdNumber);
  const [newMessages, setNewMessages] = useState<Message[]>([]);

  // const unsubscribeRef = useRef<(() => void) | null | undefined>(null);

  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    connectSocket().then(() => {
      if (!isNaN(chatRoomIdNumber)) {
        unsubscribe = subSocket(chatRoomIdNumber, data => {
          setNewMessages(prev => [...prev, data]);
        });
      }
    });

    return () => {
      // 언마운트 시 구독 해제
      unsubscribe?.();
    };
  }, [chatRoomIdNumber]);

  // REST API + 소켓 메시지 합치기
  const messages = useMemo(() => {
    const base = data?.chat?.messages?.slice().reverse() ?? [];
    return [...base, ...newMessages];
  }, [data, newMessages]);

  // 잘못된 접근 처리
  if (data === undefined) {
    return (
      <>
        <Chip onClick={() => navigate('/')}>홈으로 가기</Chip>
        <div>잘못된 접근입니다</div>
      </>
    );
  }

  return (
    <SafeArea>
      <div className={s.entireLayout}>
        <ChatRoomHeader data={data} />
        <div className={s.innerPage}>
          <ChatRoomContent data={data} messages={messages} />
        </div>
        <ChatRoomFooter chatRoomId={data.chatRoom.chatRoomId} />
      </div>
    </SafeArea>
  );
};

export default ChatRoomPage;
