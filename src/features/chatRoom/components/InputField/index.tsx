import { cx } from '@styled-system/css';
import * as s from './style.css';
import { useState } from 'react';
import { stompClient } from '@/common/utils/wsClient';
import TextareaAutosize from 'react-textarea-autosize';

interface Props {
  chatRoomId: number;
}

const InputField = ({ chatRoomId }: Props) => {
  const [message, setMessage] = useState('');
  const canSend = message.trim().length > 0;
  // const placeholder = isDeleted ? '메시지를 입력해 주세요.' : '아이템이 삭제되어 메시지를 보낼 수 없습니다.';

  const send = () => {
    if (!message.trim()) return;

    stompClient.publish({
      destination: '/pub/chat',
      body: JSON.stringify({
        chatRoomId,
        content: message,
      }),
    });

    setMessage('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      if (e.nativeEvent.isComposing) return;

      if (!e.shiftKey) {
        e.preventDefault();
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
