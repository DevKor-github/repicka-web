import { parseTime } from '@/common/utils/parseDate';
import MyChat from '../../MyChat';
import OtherChat from '../../OtherChat';
import * as s from './style.css';
import PickChat from '../../PickChat';

// [ TODO ]
// 스크롤 맨 아래가 디폴트
// 스크롤 좀 올렸을 때 맨 아래로 가는 버튼도 만들어야 하려나
// 키보드 올리면 화면 밀려 올라가게
// isMine, 날짜 그룹핑
// api 붙이기~~~ camera, send 아이콘 동작 붙이기~~~
// 픽 확인 컴포넌트 만들기~~~

interface Chat {
  isMine?: boolean;
  message?: string;
  isPick?: boolean;
  date: string;
}

const dummyData: Chat[] = [
  { isMine: true, message: '응 어쩔', date: '2025-07-09T15:56:31.591185' },
  { isMine: true, message: '배고파', date: '2025-07-09T15:56:31.591185' },
  { isMine: true, message: '응', date: '2025-07-09T15:57:31.591185' },
  { isMine: false, message: '으아아아아ㅏ 노페인 노개인 음악업슨 ㄴ세상', date: '2025-07-09T15:57:31.591185' },
  { isMine: false, message: '요즘 매미가 비가 와도 안 울어', date: '2025-07-09T15:58:31.591185' },
  { isMine: false, message: '어떤 데이터가 올까...?', date: '2025-07-09T15:58:31.591185' },
  { isMine: true, message: 'isMine도 보내주나? 아님 내가 체크해야 하나?', date: '2025-07-09T15:59:31.591185' },
  { isMine: true, message: '스크롤 체크를 해보아요', date: '2025-07-09T15:59:31.591185' },
  { isMine: true, message: '그룹핑이 바로 전 거랑 내가 직접 비교하는 수밖에 없나', date: '2025-07-09T15:59:31.591185' },
  { isMine: false, message: '나 내일 권예진이랑 초밥 먹는당', date: '2025-07-09T15:59:31.591185' },
  { isMine: false, message: '부럽지 ㅋㅋ', date: '2025-07-09T16:00:31.591185' },
  { isMine: true, message: '너무 부럽다.', date: '2025-07-09T16:00:31.591185' },
  { isMine: true, message: '집 가야지 하하하 예재무 공부해야지', date: '2025-07-09T16:01:31.591185' },
  { isPick: true, date: '2025-07-09T16:07:31.591185' },
];

// 이전 컴포넌트와 비교해서 isMine이 동일하지 않으면 gap을 2.25rem으로 조정

export const ChatRoomContent = () => {
  return (
    <div className={s.Wrapper}>
      {dummyData.map((chat, index) => {
        const time = parseTime(chat.date);

        return chat.isPick ? (
          <PickChat />
        ) : chat.isMine ? (
          <MyChat key={index} time={time}>
            {chat.message}
          </MyChat>
        ) : (
          <OtherChat key={index} time={time}>
            {chat.message}
          </OtherChat>
        );
      })}
    </div>
  );
};

export default ChatRoomContent;
