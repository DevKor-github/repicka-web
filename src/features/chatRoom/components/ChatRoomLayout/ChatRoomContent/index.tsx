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

const ChatRoomContent = ({ data }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isFirstRender = useRef(true);

  const [newMessages, setNewMessages] = useState<ChatInterface[]>([]);

  const chatRoomId = data.chatRoomId;
  const myUserId = data.myUserId;

  const { data: chats = [], hasNextPage, isFetchingNextPage, fetchNextPage } = useGetLoadChat(chatRoomId);

  const [isOpponentOnline, setIsOpponentOnline] = useState(data.isOpponentOnline);
  const [opponentLastEnterAt, setOpponentLastEnterAt] = useState(data.opponentLastEnterAt);

  // 소켓 구독하기
  useEffect(() => {
    let unsubscribe: (() => void) | undefined;

    connectSocket().then(() => {
      if (!isNaN(chatRoomId)) {
        unsubscribe = subChatRoomSocket(chatRoomId, data => {
          if (data.type === 'CHAT') {
            setNewMessages(prev => [...prev, data.message]);
          }
          if (data.type === 'ENTER' || data.type === 'EXIT') {
            if (data.message.ownerId === myUserId) {
              setIsOpponentOnline(data.message.isRequesterOnline);
              setOpponentLastEnterAt(data.message.requesterLastEnterAt);
            }
            if (data.message.requesterId === myUserId) {
              setIsOpponentOnline(data.message.isOwnerOnline);
              setOpponentLastEnterAt(data.message.ownerLastEnterAt);
            }
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
              opponentUserId={data.opponentUserId}
              nickname={data.opponentNickname}
              isOpponentOnline={isOpponentOnline}
              opponentLastEnterAt={opponentLastEnterAt}
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
