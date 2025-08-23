import InputField from '../../InputField';
import * as s from './style.css';
import type { ChatRoomInterface } from '@/features/chatRoom/types';

interface Props {
  data: ChatRoomInterface;
}

// TODO: 사진 선택 후 동작 붙이기
export const ChatRoomFooter = ({ data }: Props) => {
  return (
    <footer className={s.Wrapper}>
      <div className={s.Container}>
        <InputField chatRoomId={data.chatRoomId} />
      </div>
    </footer>
  );
};

export default ChatRoomFooter;
