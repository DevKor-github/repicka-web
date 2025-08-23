import * as s from './style.css';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { ChatInterface, ChatRoomInterface } from '@/features/chatRoom/types';
import { connectSocket, subChatRoomSocket } from '@/common/utils/wsClient';
import ChatMessageContents from '../../ChatMessageContents';
import Pagination from '@/common/components/Pagination';
import { useGetLoadChat } from '@/features/chatRoom/api/useGetLoadChat';

export interface Props {
  data: ChatRoomInterface;
}

export const ChatRoomContent = ({ data }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isFirstRender = useRef(true);

  const [newMessages, setNewMessages] = useState<ChatInterface[]>([]);

  const myUserId = data.myUserId;
  const chatRoomId = data.chatRoomId;

  const { data: chats = [], hasNextPage, isFetchingNextPage, fetchNextPage } = useGetLoadChat(chatRoomId);

  // 소켓 구독하기
  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    connectSocket().then(() => {
      if (!isNaN(chatRoomId)) {
        unsubscribe = subChatRoomSocket(chatRoomId, data => {
          if (data.type === 'CHAT') {
            setNewMessages(prev => [...prev, data.message]);
          }
        });
      }
    });

    return () => {
      unsubscribe?.();
    };
  }, [chatRoomId]);

  // 메시지 합치기
  const messages = useMemo(() => {
    const base: ChatInterface[] = chats?.slice()?.reverse() ?? [];
    return [...base, ...newMessages];
  }, [chats, newMessages]);

  // 스크롤 관리
  useEffect(() => {
    if (messages.length > 0 && isFirstRender.current) {
      ref.current?.scrollIntoView({ behavior: 'instant' });
      isFirstRender.current = false;
    } else {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div>
      <div className={s.Wrapper}>
        <Pagination<ChatInterface>
          items={messages}
          render={(message, index) => (
            <ChatMessageContents
              chat={message}
              index={index}
              messages={messages}
              myUserId={myUserId}
              nickname={data.opponentNickname}
            />
          )}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          fetchNextPage={fetchNextPage}
          direction="reverse"
        />
      </div>
      <div ref={ref} />
    </div>
  );
};

export default ChatRoomContent;
