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
  { nickName: '며나', message: '안녕하세용 직거래 가능할까요??', count: 3, chatRoomId: 1, isVerified: false },
  { nickName: '며나', message: '안녕하세용 직거래 가능할까요??', count: 3, chatRoomId: 2, isVerified: false },
  { nickName: '며나', message: '안녕하세용 직거래 가능할까요??', count: 3, chatRoomId: 3, isVerified: false },
  { nickName: '며나', message: '안녕하세용 직거래 가능할까요??', count: 3, chatRoomId: 123, isVerified: false },
  { nickName: '며나', message: '안녕하세용 직거래 가능할까요??', count: 3, chatRoomId: 123, isVerified: false },
  { nickName: '정원', message: 'ㅎㅇ', count: 2, chatRoomId: 144, isVerified: true },
  { nickName: '예진', message: '안녕 나는 권예진이야', count: 4, chatRoomId: 12, isVerified: true },
  { nickName: '승준', message: '까치가 좋아', count: 7, chatRoomId: 98, isVerified: false },
  {
    nickName: '닉네임은최대열자열자',
    message: '근데 이제 메시지가 겁나 길 때에도 어떻게 처리할지 생각해 봐야 합니다 dmkdkdkdkdk',
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
