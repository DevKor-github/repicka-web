import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import ChatRoomHeader from '@/features/chatRoom/components/ChatRoomLayout/ChatRoomHeader';
import ChatRoomContent from '@/features/chatRoom/components/ChatRoomLayout/ChatRoomContent';
import ChatRoomFooter from '@/features/chatRoom/components/ChatRoomLayout/ChatRoomFooter';

import * as s from './style.css';
import SafeArea from '@/common/components/SafeArea';
import Chip from '@/common/components/Chip';
import { getChatRoom } from '@/features/chatRoom/api/useGetChatRoom';

const ChatRoomPage = () => {
  const navigate = useNavigate();
  const { chatRoomId } = useParams();
  const chatRoomIdNumber = Number(chatRoomId);

  const [data, setData] = useState<Awaited<ReturnType<typeof getChatRoom>> | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchChatRoom = async () => {
      try {
        setIsLoading(true);
        const res = await getChatRoom(chatRoomIdNumber);
        setData(res);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchChatRoom();
  }, [chatRoomIdNumber]);

  if (isLoading) return <div>로딩 중..</div>;
  if (error || !data) {
    return (
      <>
        <Chip onClick={() => navigate('/')}>홈으로 가기</Chip>
        <div>잘못된 접근입니다</div>
      </>
    );
  }

  return (
    <SafeArea>
      <div className={s.entireLayout}>
        <ChatRoomHeader data={data.chatRoom} />
        <div className={s.innerPage}>
          <ChatRoomContent data={data.chatRoom} />
        </div>
        <ChatRoomFooter data={data.chatRoom} />
      </div>
    </SafeArea>
  );
};

export default ChatRoomPage;
