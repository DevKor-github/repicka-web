import MyChat from '../../MyChat';
import OtherChat from '../../OtherChat';
import * as s from './style.css';

// [ TODO ]
// 스크롤 맨 아래가 디폴트
// 스크롤 좀 올렸을 때 맨 아래로 가는 버튼도 만들어야 하려나
// 키보드 올리면 화면 밀려 올라가게
// isMine, 날짜 그룹핑
// api 붙이기~~~ camera, send 아이콘 동작 붙이기~~~
// 픽 확인 컴포넌트 만들기~~~

interface Chat {
  isMine: boolean;
  message: string;
  time: string;
}

const dummyData: Chat[] = [
  { isMine: true, message: '응 어쩔', time: '오후 6:32' },
  { isMine: true, message: '배고파', time: '오후 6:32' },
  { isMine: true, message: '응', time: '오후 6:33' },
  { isMine: false, message: '으아아아아ㅏ 노페인 노개인 음악업슨 ㄴ세상', time: '오후 6:34' },
  { isMine: false, message: '요즘 매미가 비가 와도 안 울어', time: '오후 6:34' },
  { isMine: false, message: '어떤 데이터가 올까...?', time: '오후 6:34' },
  { isMine: true, message: 'isMine도 보내주나? 아님 내가 체크해야 하나?', time: '오후 6:33' },
];

export const ChatRoomContent = () => {
  return (
    <div className={s.Wrapper}>
      {dummyData.map((chat, index) =>
        chat.isMine ? (
          <MyChat key={index} time={chat.time}>
            {chat.message}
          </MyChat>
        ) : (
          <OtherChat key={index} time={chat.time}>
            {chat.message}
          </OtherChat>
        ),
      )}
    </div>
  );
};

export default ChatRoomContent;
