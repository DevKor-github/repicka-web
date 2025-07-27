import { parseDate, parseTime } from '@/common/utils/parseDate';
import MyChat from '../../MyChat';
import OtherChat from '../../OtherChat';
import * as s from './style.css';
import PickChat from '../../PickChat';
import { useEffect, useRef } from 'react';
import React from 'react';
import type { ChatRoomResponse } from '@/features/chatRoom/types';

// [ TODO ]
// 스크롤 좀 올렸을 때 맨 아래로 가는 버튼도 만들어야 하려나
// 키보드 올리면 화면 밀려 올라가게
// api 붙이기~~~ camera, send 아이콘 동작 붙이기~~~

// interface Chat {
//   isMine?: boolean;
//   message?: string;
//   isPick?: boolean;
//   date: string;
// }

// const dummyData: Chat[] = [
//   { isMine: true, message: '응 어쩔', date: '2025-07-09T15:56:31.591185' },
//   { isMine: true, message: '배고파', date: '2025-07-09T15:56:31.591185' },
//   { isMine: true, message: '응', date: '2025-07-09T15:57:31.591185' },
//   { isMine: false, message: '으아아아아ㅏ 노페인 노개인 음악업슨 ㄴ세상', date: '2025-07-09T15:57:31.591185' },
//   { isMine: false, message: '요즘 매미가 비가 와도 안 울어', date: '2025-07-09T15:58:31.591185' },
//   { isMine: false, message: '어떤 데이터가 올까...?', date: '2025-07-09T15:58:31.591185' },
//   { isMine: true, message: 'isMine도 보내주나? 아님 내가 체크해야 하나?', date: '2025-07-09T15:59:31.591185' },
//   { isMine: true, message: '스크롤 체크를 해보아요', date: '2025-07-09T15:59:31.591185' },
//   { isMine: true, message: '그룹핑이 바로 전 거랑 내가 직접 비교하는 수밖에 없나', date: '2025-07-09T15:59:31.591185' },
//   { isMine: false, message: '나 내일 권예진이랑 초밥 먹는당', date: '2025-07-09T15:59:31.591185' },
//   { isMine: false, message: '부럽지 ㅋㅋ', date: '2025-07-09T16:00:31.591185' },
//   { isMine: true, message: '너무 부럽다.', date: '2025-07-09T16:00:31.591185' },
//   { isMine: true, message: '집 가야지 하하하 예재무 공부해야지', date: '2025-07-09T16:01:31.591185' },
//   { isPick: true, isMine: true, date: '2025-07-09T16:07:31.591185' },
//   { isPick: true, isMine: false, date: '2025-07-09T16:07:31.591185' },
//   { isMine: true, message: '공부는 안 하고 지금 왜 개발만', date: '2025-07-18T16:01:31.591185' },
//   { isMine: true, message: 'ㅠㅠㅠ', date: '2025-07-18T16:02:31.591185' },
//   { isMine: false, message: 'ㅠㅠㅠ', date: '2025-07-18T16:02:31.591185' },
// ];

export interface Props {
  data: ChatRoomResponse;
}

export const ChatRoomContent = ({ data }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'auto' });
  }, []);

  const messages = data.chat.messages;
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
            // TODO: <React.Fragment key={`${chat.date}-${chat.message || 'no-message'}`}>로 변경 (key를 index 말고 고유할 수 있는 값으로,,,)
            <React.Fragment key={index}>
              {isNewDate && <div className={s.Date({ isFirst: isFirst })}>{date}</div>}

              {
                // chat.isPick ? (
                //   <PickChat marginTop={marginTop} isMine={isMine} />
                // ) : chat.isMine ? (
                //   <MyChat marginTop={marginTop} time={time}>
                //     {chat.content}
                //   </MyChat>
                // ) : (
                //   <OtherChat marginTop={marginTop} time={time}>
                //     {chat.content}
                //   </OtherChat>
                // )
                // isMine ? (
                //   <MyChat marginTop={marginTop} time={time}>
                //     {chat.content}
                //   </MyChat>
                // ) :
                //   <OtherChat marginTop={marginTop} time={time}>
                //     {chat.content}
                //   </OtherChat>
              }
            </React.Fragment>
          );
        })}
      </div>
      <div ref={ref} />
    </div>
  );
};

export default ChatRoomContent;
