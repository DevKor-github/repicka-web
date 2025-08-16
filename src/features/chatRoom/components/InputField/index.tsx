import { cx } from '@styled-system/css';
import * as s from './style.css';
import { useEffect, useState } from 'react';
import { stompClient } from '@/common/utils/wsClient';
import TextareaAutosize from 'react-textarea-autosize';

export const InputField = ({ chatRoomId }: { chatRoomId: number }) => {
  const [message, setMessage] = useState('');
  const [canSend, setCanSend] = useState(false);

  useEffect(() => {
    setCanSend(message.trim().length > 0);
  }, [message]);

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
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      if (e.nativeEvent.isComposing) return;

      if (!e.shiftKey) {
        e.preventDefault(); // ✅ 기본 줄바꿈 막기
        send();
      }
    }
  };

  return (
    <div className={s.Container}>
      <TextareaAutosize
        minRows={1}
        maxRows={4}
        onChange={e => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        value={message}
        placeholder="메시지를 입력해 주세요"
        className={s.Input}
      />
      <button className={cx(s.SendIcon({ canSend: canSend }), 'mgc_send_fill')} onClick={send} />
    </div>
  );
};

export default InputField;
