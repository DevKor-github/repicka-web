import InputField from '../../InputField';
import * as s from './style.css';
import type { ChatRoomInterface } from '@/features/chatRoom/types';

interface Props {
  data: ChatRoomInterface;
}

export const ChatRoomFooter = ({ data }: Props) => {
  return (
    <footer className={s.Wrapper}>
      <div className={s.Container}>
        <div className={`${'mgc_camera_2_fill'} ${s.Icon}`} />
        <InputField chatRoomId={data.chatRoomId} />
      </div>
    </footer>
  );
};

export default ChatRoomFooter;
