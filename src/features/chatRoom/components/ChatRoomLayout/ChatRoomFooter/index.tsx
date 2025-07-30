import InputField from '../../InputField';
import * as s from './style.css';

interface Props {
  chatRoomId: number;
}

export const ChatRoomFooter = ({ chatRoomId }: Props) => {
  return (
    <footer className={s.Wrapper}>
      <div className={s.Container}>
        <div className={`${'mgc_camera_2_fill'} ${s.Icon}`} />
        <InputField chatRoomId={chatRoomId} />
      </div>
    </footer>
  );
};

export default ChatRoomFooter;
