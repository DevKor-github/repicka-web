import type { ChatRoomResponseData } from '@/features/chatRoom/types';
import InputField from '../../InputField';
import * as s from './style.css';

interface Props {
  data: ChatRoomResponseData;
}

export const ChatRoomFooter = ({ data }: Props) => {
  return (
    <footer className={s.Wrapper}>
      <div className={s.Container}>
        <div className={`${'mgc_camera_2_fill'} ${s.Icon}`} />
        <InputField chatRoomId={data.chatRoom.chatRoomId} />
      </div>
    </footer>
  );
};

export default ChatRoomFooter;
