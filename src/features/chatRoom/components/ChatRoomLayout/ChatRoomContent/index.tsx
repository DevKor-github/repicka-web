import { parseDate, parseTime } from '@/common/utils/parseDate';
import MyChat from '../../MyChat';
import OtherChat from '../../OtherChat';
import * as s from './style.css';
import PickChat from '../../PickChat';
import { useEffect, useRef } from 'react';
import React from 'react';
import type { ChatRoomResponse, Message } from '@/features/chatRoom/types';

// [ TODO ]
// 스크롤 좀 올렸을 때 맨 아래로 가는 버튼도 만들어야 하려나
// 키보드 올리면 화면 밀려 올라가게

export interface Props {
  data: ChatRoomResponse;
  messages: Message[];
}

export const ChatRoomContent = ({ data, messages }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'auto' });
  }, []);

  const myUserId = data.chatRoom.myUserId;

  return (
    <div>
      <div className={s.Wrapper}>
        {messages.map((chat, index) => {
          const time = parseTime(chat.chatId.date);
          const date = parseDate(chat.chatId.date);

          const isMine = chat.userId === myUserId;

          const prevDate = index > 0 ? parseDate(messages[index - 1].chatId.date) : null;
          const prevIsMine = index > 0 ? messages[index - 1].userId === myUserId : null;

          const isNewDate = date !== prevDate;
          const isNewIsMine = isMine !== prevIsMine;
          const isFirst = index === 0;

          const marginTop = isNewIsMine ? '2.25rem' : '0.75rem';

          return (
            // <React.Fragment key={`${chat.date}-${chat.message || 'no-message'}`}>
            <React.Fragment key={chat.chatId.timestamp}>
              {isNewDate && <div className={s.Date({ isFirst: isFirst })}>{date}</div>}
              {chat.isPick ? (
                <PickChat marginTop={marginTop} isMine={isMine} />
              ) : isMine ? (
                <MyChat marginTop={marginTop} time={time}>
                  {chat.content}
                </MyChat>
              ) : (
                <OtherChat marginTop={marginTop} time={time}>
                  {chat.content}
                </OtherChat>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <div ref={ref} />
    </div>
  );
};

export default ChatRoomContent;
