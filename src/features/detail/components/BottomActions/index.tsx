import Btn from '@/common/components/Button';

import * as s from './style.css';

const BottomActions = () => {
  // TODO: 실제 액션 추가
  return (
    <div className={s.Container}>
      <Btn color="softgray" className={s.ChatButton}>
        <span className="mgc_chat_2_fill" />
        <p>채팅</p>
      </Btn>
      <Btn color="main" className={s.SelectButton}>
        대여일자선택
      </Btn>
    </div>
  );
};
export default BottomActions;
