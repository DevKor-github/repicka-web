import * as s from './style.css';
import { Link, useNavigate } from 'react-router';
import SchoolVerifiedTag from '@/common/components/SchoolVerifiedTag';
import { UserProfileImage } from '@/common/components/UserProfileImage';
import { getKoreanRelativeTime } from '@/common/utils/getKoreanRelativeTime';
import type { ChatListInterface } from '../../types';
import { useLongPress } from 'use-long-press';
import Drawer from '@/common/components/Drawer';
import useDrawer from '@/common/hooks/useDrawer';
import ChatDrawer from '../ChatDrawer';
import { useState } from 'react';
import CustomAlert from '@/common/components/CustomAlert';
import { usePatchExit } from '../../api/usePatchExit';
import getImageUrl from '@/common/utils/getImageUrl';
import { getInProgress } from '../../api/useGetInProgress';

export interface Props {
  data: ChatListInterface;
}

const ChatList = ({ data }: Props) => {
  const navigate = useNavigate();
  const { open, drawerState, close } = useDrawer();
  const { mutate: exitChatRoom } = usePatchExit();

  const [showExitAlert, setShowExitAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const thumbnail = data.itemThumbnailUrl ? getImageUrl(data.itemThumbnailUrl) : 'base-url';

  const onUnshowAlert = () => {
    if (showExitAlert) setShowExitAlert(false);
    if (showErrorAlert) setShowErrorAlert(false);
  };

  const onExit = async () => {
    try {
      const res = await getInProgress(data.chatRoomId);
      const isInProgress = res.data;
      setShowErrorAlert(isInProgress);
      setShowExitAlert(!isInProgress);
    } catch (error) {
      console.error('대여 중 약속 체크 실패', error);
      setShowErrorAlert(true);
    }
  };

  const onReport = () => {
    navigate(`/report/${data.opponentUserId}`, {
      state: {
        reportedUserId: data.opponentUserId,
        itemId: data.itemId,
        location: 'CHATROOM',
      },
    });
  };

  const exitChat = async () => {
    setShowExitAlert(false);
    try {
      await exitChatRoom(data.chatRoomId);
      close();
    } catch (error) {
      setShowErrorAlert(true);
    }
  };

  const message = data.mostRecentChatContent ? data.mostRecentChatContent : '대화를 시작해 보세요!';

  const bind = useLongPress(() => {
    open();
  });

  return (
    <>
      <Link className={s.List} to={`/chat/${data.chatRoomId}`} {...bind()}>
        <div className={s.Img}>
          <img className={s.Thumbnail} src={thumbnail} />
          <UserProfileImage nickname={data.opponentNickname} src={data.opponentProfileImageUrl} />
        </div>
        <div className={s.Contents}>
          <div className={s.TimeInfo}>
            <div className={s.UserInfo}>
              <h1>{data.opponentNickname}</h1>
              {data.isOpponentKorean && <SchoolVerifiedTag />}
            </div>
            {data.lastChatAt && <div className={s.Time}>{getKoreanRelativeTime(new Date(data.lastChatAt))}</div>}
          </div>
          <div className={s.MessageInfo}>
            <p className={s.Message}>{message}</p>
            {data.unreadChatCount !== 0 && <div className={s.Count}>{data.unreadChatCount}</div>}
          </div>
        </div>
      </Link>
      <Drawer drawerState={drawerState} title={data.opponentNickname}>
        <ChatDrawer onExit={onExit} onReport={onReport} />
      </Drawer>
      {showExitAlert && (
        <CustomAlert
          title={'채팅방을 나가면 대화 내용과\n약속이 모두 취소돼요.'}
          subTitle="정말 퇴장하실 건가요?"
          yesBtn="네, 퇴장할래요"
          onNo={onUnshowAlert}
          onYes={exitChat}
        />
      )}
      {showErrorAlert && (
        <CustomAlert
          title="앗, 아직 대여가 진행 중인 상품이에요!"
          subTitle={'착용 후, 판매자에게\n상품을 돌려주어야 퇴장이 가능해요.'}
          yesBtn="닫기"
          onYes={() => {
            setShowErrorAlert(false);
            close();
          }}
        />
      )}
    </>
  );
};

export default ChatList;
