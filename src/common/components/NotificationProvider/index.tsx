import { useEffect, type PropsWithChildren } from 'react';

const NotificationProvider = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);
        alert(data.message);
      } catch (e) {
        console.log(e);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return <>{children}</>;
};
export default NotificationProvider;
