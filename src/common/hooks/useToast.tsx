import { useCallback, useRef } from 'react';
import { useOverlay } from '@/common/hooks/useOverlay';
import Toast from '@/common/components/Toast';

export const TOAST_ANIMATION_DURATION = 300;
export const TOAST_DISPLAY_DURATION = 1000 + TOAST_ANIMATION_DURATION;

interface OpenToastOption {
  message: string;
}
export function useToast() {
  // toast를 motion.div로 구현하니, 바로 exit 시켜도 애니메이션이 적용되는 것 같습니다만..
  // 만일을 위해 transition이 보여질 수 있도록 close와 exit 로직을 분리하였습니다
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

  const openToast = ({ message }: OpenToastOption) => {
    initTimeout();
    closeTimeoutRef.current = setTimeout(handleClose, TOAST_DISPLAY_DURATION);
    overlay.open(({ isOpen }) => <Toast isOpen={isOpen} message={message} />);
  };

  return { openToast };
}
