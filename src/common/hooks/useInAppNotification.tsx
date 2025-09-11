import { useCallback, useRef } from 'react';
import { useOverlay } from '@/common/hooks/useOverlay';
import InAppNotification from '../components/InAppNotification';

export const TOAST_ANIMATION_DURATION = 300;
export const TOAST_DISPLAY_DURATION = 1000 + TOAST_ANIMATION_DURATION;

interface OpenInAppNotificationOption {
  nickname: string | null;
  content: string | null;
  profileImage: string | null;
  chatRoomId: number;
}
export function useInAppNotificaiton() {
  const overlay = useOverlay({ exitOnUnmount: false });
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const exitTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const initTimeout = useCallback(() => {
    // 각종 타이머들을 초기화 합니다
    if (closeTimeoutRef.current !== null) {
      clearTimeout(closeTimeoutRef.current);
    }

    if (exitTimeoutRef.current !== null) {
      clearTimeout(exitTimeoutRef.current);
    }
  }, []);

  const handleClose = useCallback(() => {
    overlay.close();
    exitTimeoutRef.current = setTimeout(overlay.exit, TOAST_ANIMATION_DURATION);
  }, [overlay]);

  const openNotification = ({ content, profileImage, nickname, chatRoomId }: OpenInAppNotificationOption) => {
    initTimeout();
    closeTimeoutRef.current = setTimeout(handleClose, TOAST_DISPLAY_DURATION);
    overlay.open(({ isOpen }) => (
      <InAppNotification
        isOpen={isOpen}
        content={content}
        nickname={nickname}
        profileImage={profileImage}
        chatRoomId={chatRoomId}
      />
    ));
  };

  return { openNotification };
}
