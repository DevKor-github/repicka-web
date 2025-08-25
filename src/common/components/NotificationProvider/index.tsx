import { isJSON } from 'es-toolkit';
import { useCallback, useEffect, type PropsWithChildren } from 'react';

import type { NativeMessage } from '@/libs/types/native';

const NotificationProvider = ({ children }: PropsWithChildren) => {
  // const { mutate: patchFCMToken } = usePatchFCMToken();

  // rn에서 Webview로 보낸 값을 수신하는 함수
  const FCMTokenListener = useCallback((event: MessageEvent) => {
    if (!isJSON(event.data)) return;

    alert('1');

    const data = JSON.parse(event.data) as NativeMessage<string>;

    if (data.type === 'FCM_TOKEN') {
      alert('2');
      alert(data.data);
      // patchFCMToken(data.data);
    }
  }, []);

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
