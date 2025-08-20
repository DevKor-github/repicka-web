import * as s from './style.css';
import { Link } from 'react-router';
import SchoolVerifiedTag from '@/common/components/SchoolVerifiedTag';
import { UserProfileImage } from '@/common/components/UserProfileImage';
import { toKST } from '@/common/utils/toKST';
import { getKoreanRelativeTime } from '@/common/utils/getKoreanRelativeTime';
import type { ChatListInterface } from '../../types';
import { useLongPress } from 'use-long-press';
import Drawer from '@/common/components/Drawer';
import useDrawer from '@/common/hooks/useDrawer';
import ChatDrawer from '../ChatDrawer';
import { useState } from 'react';
import CustomAlert from '@/common/components/CustomAlert';
import { usePatchExit } from '../../api/usePatchExit';

export interface Props {
  data: ChatListInterface;
}

const ChatList = ({ data }: Props) => {
  const { open, drawerState, close } = useDrawer();
  const { mutate: exitChatRoom } = usePatchExit();
  const [showExitAlert, setShowExitAlert] = useState(false);

  const onUnshowAlert = () => {
    setShowExitAlert(false);
  };

  const onExit = () => {
    setShowExitAlert(true);
  };

  const onReport = () => {
    console.log('신고하기');
  };

  const onRead = () => {
    console.log('읽음 처리');
    close();
  };

  const exitChat = () => {
    exitChatRoom(data.chatRoomId);
    setShowExitAlert(false);
    close();
  };

  const message = data.mostRecentChatIsPick
    ? `${data.mostRecentChatNickname}님께서 설정하신 대여 정보가 도착했어요`
    : data.mostRecentChatContent
      ? data.mostRecentChatContent
      : '대화를 시작해 보세요!';

  const bind = useLongPress(() => {
    open();
  });

  return (
    <>
      <Link className={s.List} to={`/chatroom/${data.chatRoomId}`} {...bind()}>
        <UserProfileImage nickname={data.opponentNickname} profileImageUrl={data.opponentProfileImageUrl} />
        <div className={s.Contents}>
          <div className={s.TimeInfo}>
            <div className={s.UserInfo}>
              <h1>{data.opponentNickname}</h1>
              {data.isOpponentKorean && <SchoolVerifiedTag />}
            </div>
            {data.lastChatAt && <div className={s.Time}>{getKoreanRelativeTime(toKST(new Date(data.lastChatAt)))}</div>}
          </div>
          <div className={s.MessageInfo}>
            <p className={s.Message}>{message}</p>
            {data.unreadChatCount !== 0 && <div className={s.Count}>{data.unreadChatCount}</div>}
          </div>
        </div>
      </Link>
      <Drawer drawerState={drawerState} title={data.opponentNickname}>
        <ChatDrawer onExit={onExit} onRead={onRead} onReport={onReport} />
      </Drawer>
      {showExitAlert && (
        <CustomAlert
          Title="대화방을 나가면 대화 내용이 모두 삭제돼요."
          subTitle="정말 퇴장하실 건가요?"
          yesBtn="네, 퇴장할래요"
          onUnshow={onUnshowAlert}
          onYes={exitChat}
        />
      )}
    </>
  );
};

export default ChatList;
