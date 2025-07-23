import InputField from '../../InputField';
import * as s from './style.css';

export const ChatRoomFooter = () => {
  return (
    <footer className={s.Wrapper}>
      <div className={s.Container}>
        <div className={`${'mgc_camera_2_fill'} ${s.Icon}`} />
        <InputField />
      </div>
    </footer>
  );
};

export default ChatRoomFooter;
