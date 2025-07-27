import { useNavigate } from 'react-router';
import * as s from './style.css';

export const ChatRoomHeader = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <header>
      <div className={s.Container}>
        <button className={`mgc_left_fill ${s.BackBtn}`} onClick={goBack}></button>
        <div className={s.UserInfo}>
          <div className={s.ProfileCircle} />
          <div className={s.Verified}>
            <span>며나</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ChatRoomHeader;
