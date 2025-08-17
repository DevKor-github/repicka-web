import { useCallback, useEffect, type PropsWithChildren } from 'react';
import { isJSON } from 'es-toolkit';

import { usePatchFCMToken } from '@/common/apis/usePatchFCMToken';
import type { NativeMessage } from '@/libs/types/native';

const NotificationProvider = ({ children }: PropsWithChildren) => {
  const { mutate: patchFCMToken } = usePatchFCMToken();

  // rn에서 Webview로 보낸 값을 수신하는 함수
  const FCMTokenListener = useCallback(
    (event: MessageEvent) => {
      if (!isJSON(event.data)) return;

      const data = JSON.parse(event.data) as NativeMessage<string>;
      if (data.type === 'FCM_TOKEN') {
        patchFCMToken(data.data);
      }
    },
    [patchFCMToken],
  );

  useEffect(() => {
    // android, ios 구분하는 코드
    const receiver = navigator.userAgent.includes('Android') ? document : window;
    receiver.addEventListener('message', FCMTokenListener as EventListener);

    return () => {
      receiver.removeEventListener('message', FCMTokenListener as EventListener);
    };
  }, [FCMTokenListener]);

  return <>{children}</>;
};
export default NotificationProvider;
