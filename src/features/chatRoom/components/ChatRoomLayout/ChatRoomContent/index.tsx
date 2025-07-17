import MyChat from '../../MyChat';
import OtherChat from '../../OtherChat';
import * as s from './style.css';

export const ChatRoomContent = () => {
  // [ TODO ]
  // 스크롤 맨 아래가 디폴트
  // 스크롤 좀 올렸을 때 맨 아래로 가는 버튼도 만들어야 하려나
  // 키보드 올리면 화면 밀려 올라가게
  // 내 채팅, 상대 채팅 묶어서 gap 서로 다르게
  // 날짜 그룹핑
  // api 붙이기~~~ camera, send 아이콘 동작 붙이기~~~
  // 픽 확인 컴포넌트 만들기~~~

  return (
    <div className={s.Wrapper}>
      <MyChat time="오후 6:32">응 어쩔</MyChat>
      <OtherChat time="오후 6:32">흠ㅁ...</OtherChat>
      <OtherChat time="오후 6:32">노페인 노개인 음악없ㅂ는 세상 ㅇㅇㅡ아아아</OtherChat>
      <MyChat time="오후 6:32">소리 지르지 마세요 소리지르는니가 챔피언</MyChat>
      <OtherChat time="오후 6:32">스크롤이 잘되는지 확인해보기</OtherChat>
      <MyChat time="오후 6:32">으악 채팅 할 거 많다</MyChat>
      <MyChat time="오후 6:32">일단 디자인이랑 같은지, 뭐가 더 필요한지 체크하기...</MyChat>
      <MyChat time="오후 6:32">망고빙수 먹고 싶당</MyChat>
      <OtherChat time="오후 6:32">스크롤 체크</OtherChat>
    </div>
  );
};

export default ChatRoomContent;
