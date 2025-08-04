import { cx } from '@styled-system/css';
import * as s from './style.css';
import { useState } from 'react';
import { stompClient } from '@/common/utils/wsClient';

export const InputField = ({ chatRoomId }: { chatRoomId: number }) => {
  const [message, setMessage] = useState('');

  const send = () => {
    if (!message.trim()) return;

    stompClient.send(
      '/pub/chat',
      {},
      JSON.stringify({
        chatRoomId,
        content: message,
      }),
    );

    setMessage('');
  };

  // TODO: 한글 입력 시 마지막 글자 중복으로 보내지는 버그 있음
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') send();
  };

  return (
    <div className={s.Container}>
      <input
        className={s.Input}
        placeholder="메시지를 입력해 주세요"
        value={message}
        onChange={e => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className={cx(s.SendIcon(), 'mgc_send_fill')} onClick={send} />
    </div>
  );
};

export default InputField;
