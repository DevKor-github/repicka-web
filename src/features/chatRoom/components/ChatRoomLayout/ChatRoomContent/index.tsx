import { useEffect, useRef } from 'react';

import * as s from './style.css';

import type { ChatRoomInterface } from '@/features/chatRoom/types';
import ChatMessageContents from '../../ChatMessageContents';
import Pagination from '@/common/components/Pagination';
import { useGetLoadChat } from '@/features/chatRoom/api/useGetLoadChat';
import useChatRoomSocket from '@/features/chatRoom/hooks/useChatRoomSocket';

export interface Props {
  data: ChatRoomInterface;
}

const ChatRoomContent = ({ data }: Props) => {
  const chatRoomId = data.chatRoomId;
  const myUserId = data.myUserId;

  const { newMessages, isOpponentOnline, opponentLastEnterAt } = useChatRoomSocket({
    chatRoomId,
    userId: myUserId,
    restIsOpponentOnline: data.isOpponentOnline,
    restOpponentLastEnterAt: data.opponentLastEnterAt,
  });

  const {
    data: chats = [],
    hasNextPage,
    isFetching,
    isSuccess,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetLoadChat(chatRoomId);

  // 메시지 합치기
  const messages = [[...chats].reverse(), ...newMessages].flat();

  const scrollRef = useRef<HTMLDivElement>(null);
  const prevHeight = useRef(0);
  const isMountedRef = useRef(false);

  const customFetchNextPage = () => {
    prevHeight.current = scrollRef?.current?.scrollHeight || 0;
    fetchNextPage();
  };

  useEffect(() => {
    // 첫 방문시에 스크롤 위치 초기화
    if (scrollRef.current && isSuccess && !isMountedRef.current) {
      console.log(scrollRef.current.scrollTop);
      console.log(scrollRef.current.scrollHeight);
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      console.log(scrollRef.current.scrollTop);
      console.log(scrollRef.current.scrollHeight);
      isMountedRef.current = true;
    }
  }, [isSuccess]);

  useEffect(() => {
    // 페이지네이션시에 스크롤 보정
    if (prevHeight.current > 0 && scrollRef.current && !isFetching) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight - prevHeight.current;
    }
  }, [isFetching]);

  useEffect(() => {
    if (newMessages.length > 0 && scrollRef.current) {
      // if (newMessages[newMessages.length - 1].userId === myId) {
      // 내가 새로운 메세지를 보낼 때
      // 또는 새로운 메세지가 올 때 바닥에 있는 경우
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
      // }
    }
  }, [newMessages]);

  return (
    <div className={s.Wrapper} ref={scrollRef}>
      <Pagination
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
        fetchNextPage={customFetchNextPage}
        direction="reverse"
      />
    </div>
  );
};

export default ChatRoomContent;
