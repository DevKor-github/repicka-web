import { isJSON } from 'es-toolkit';
import { useCallback, useEffect, type PropsWithChildren } from 'react';

import type { NativeMessage } from '@/libs/types/native';
import useGetIsLogin from '@/common/apis/useGetIsLogin';
import { useFCMStore } from '@/common/store/FCMStore';
import { usePatchFCMToken } from '@/common/apis/usePatchFCMToken';

const NotificationProvider = ({ children }: PropsWithChildren) => {
  const { data: isLogin, isSuccess } = useGetIsLogin();
  const { mutate: patchFCMToken } = usePatchFCMToken();

  const fcmToken = useFCMStore(state => state.fcmToken);
  const setFcmToken = useFCMStore(state => state.setFcmToken);

  const isAuth = !!isLogin && isSuccess;

  // rn에서 Webview로 보낸 값을 수신하는 함수
  const FCMTokenListener = useCallback(
    (event: MessageEvent) => {
      if (!isJSON(event.data)) return;

      const data = JSON.parse(event.data) as NativeMessage<string>;

      if (data.type === 'FCM_TOKEN') {
        setFcmToken(data.payload);
      }
    },
    [setFcmToken],
  );

  useEffect(() => {
    if (isAuth && fcmToken) {
      patchFCMToken(fcmToken);
    }
  }, [isAuth, fcmToken, patchFCMToken]);

  useEffect(() => {
    // android, ios 구분하는 코드
    document.addEventListener('message', FCMTokenListener as EventListener);
    window.addEventListener('message', FCMTokenListener as EventListener);

    return () => {
      document.removeEventListener('message', FCMTokenListener as EventListener);
      window.removeEventListener('message', FCMTokenListener as EventListener);
    };
  }, [FCMTokenListener]);
  return <>{children}</>;
};
export default NotificationProvider;
