import InputField from '../../InputField';
import * as s from './style.css';

export const ChatRoomFooter = () => {
  return (
    <footer>
      <div className={s.Container}>
        <div className={`${'mgc_camera_2_fill'} ${s.Icon}`} />
        <div className={s.ChatRoomInputField}>
          <InputField />
        </div>
      </div>
    </footer>
  );
};

export default ChatRoomFooter;
