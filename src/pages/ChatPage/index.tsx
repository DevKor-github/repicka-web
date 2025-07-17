import SafeArea from '@/common/components/SafeArea';
import * as s from './style.css';
import ChatList from '@/features/chat/components/ChatList';
import MainTopBar from '@/common/components/MainTopBar';

interface List {
  nickName: string;
  message: string;
  count: number;
  chatRoomId: number;
  isVerified: boolean;
}

const dummyData: List[] = [
  { nickName: '며나', message: '안녕하세용 직거래 가능할까요??', count: 3, chatRoomId: 123, isVerified: false },
  { nickName: '며나', message: '안녕하세용 직거래 가능할까요??', count: 3, chatRoomId: 123, isVerified: false },
  { nickName: '며나', message: '안녕하세용 직거래 가능할까요??', count: 3, chatRoomId: 123, isVerified: false },
  { nickName: '며나', message: '안녕하세용 직거래 가능할까요??', count: 3, chatRoomId: 123, isVerified: false },
  { nickName: '며나', message: '안녕하세용 직거래 가능할까요??', count: 3, chatRoomId: 123, isVerified: false },
  { nickName: '정원', message: 'ㅎㅇ', count: 2, chatRoomId: 144, isVerified: true },
  { nickName: '예진', message: '안녕 나는 권예진이야', count: 4, chatRoomId: 12, isVerified: true },
  { nickName: '승준', message: '까치가 좋아', count: 7, chatRoomId: 98, isVerified: false },
  {
    nickName: '굉',
    message:
      '아 메시지가 겁나 길면 어떻게 처리할지도 해야 하는구나 ㅡㅁ흠흐흐믛 겁나 길게 보내기 더 길게 보내기 더더더더더더더더 길게 보내기 최대 한 줄? 두줄?',
    count: 2,
    chatRoomId: 2,
    isVerified: false,
  },
  {
    nickName: '닉네임이 겁나 길 때에도 처리해 줘야 하는군요',
    message: '최대 몇 자로 하지',
    count: 1,
    chatRoomId: 90,
    isVerified: true,
  },
];

const ChatPage = () => {
  return (
    <SafeArea>
      <MainTopBar />
      <div className={s.Wrapper}>
        {/* TODO: 불러오기 */}
        {dummyData.map((data, index) => (
          <ChatList
            key={index}
            count={data.count}
            message={data.message}
            nickName={data.nickName}
            chatRoomId={data.chatRoomId}
            isVerified={data.isVerified}
          />
        ))}
      </div>
    </SafeArea>
  );
};

export default ChatPage;
