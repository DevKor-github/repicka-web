import React from 'react';
import { parseDate, parseTime } from '@/common/utils/parseDate';
import * as s from './style.css';

import type { ChatInterface } from '@/features/chatRoom/types';
import PickChat from '../PickChat';
import MyChat from '../MyChat';
import OtherChat from '../OtherChat';
import { isBefore } from 'date-fns';

interface Props {
  chat: ChatInterface;
  index: number;
  messages: ChatInterface[];
  myUserId: number;
  opponentUserId: number;
  nickname: string;
  isOpponentOnline: boolean;
  opponentLastEnterAt: string;
}

const ChatMessageContents = ({ chat, index, messages, myUserId, isOpponentOnline, opponentLastEnterAt }: Props) => {
  const isRead = isOpponentOnline || isBefore(chat.createdAt, opponentLastEnterAt);

  const time = parseTime(chat.createdAt);
  const date = parseDate(chat.createdAt);
  const isMine = chat.userId === myUserId;
  const isNotification = chat.isNotification;

  const prevChat = messages[index - 1];
  const nextChat = messages[index + 1];

  const prevDate = prevChat ? parseDate(prevChat.createdAt) : null;
  const prevIsMine = prevChat ? prevChat.userId === myUserId : null;

  const isNewDate = date !== prevDate;
  const isNewIsMine = isMine !== prevIsMine;
  const isFirst = index === 0;
  const marginTop = isNewIsMine ? '2.25rem' : '0.75rem';

  const isNextSameUser = nextChat && nextChat.userId === chat.userId;
  const isNextSameTime = nextChat && parseTime(nextChat.createdAt) === time;
  const showTime = !isNextSameUser || !isNextSameTime;

  return (
    <React.Fragment key={chat.chatId}>
      {isNewDate && <div className={s.Date({ isFirst })}>{date}</div>}
      {isNotification ? (
        <div className={s.Notification}>{chat.content}</div>
      ) : chat.isPick ? (
        <PickChat marginTop={marginTop} isMine={isMine} children={chat.content} />
      ) : isMine ? (
        <MyChat marginTop={marginTop} time={showTime ? time : undefined} isRead={isRead}>
          {chat.content}
        </MyChat>
      ) : (
        <OtherChat marginTop={marginTop} time={showTime ? time : undefined}>
          {chat.content}
        </OtherChat>
      )}
    </React.Fragment>
  );
};

export default ChatMessageContents;
