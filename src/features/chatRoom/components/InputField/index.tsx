import { cx } from '@styled-system/css';
import * as s from './style.css';

// [ TODO ]
// 멀티라인으로 바꿔야 하나? 그런 것 같다
// 나갔다 들어와도 작성 중인 메시지 유지

export const InputField = () => {
  const send = () => {
    console.log('메시지 보내기');
  };

  return (
    <div className={s.Container}>
      <input className={s.Input} placeholder="메시지를 입력해 주세요" />
      <button className={cx(s.SendIcon(), 'mgc_send_fill')} onClick={send} />
    </div>
  );
};

export default InputField;
