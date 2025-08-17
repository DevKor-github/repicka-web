import { cx } from '@styled-system/css';
import InputField from '../../InputField';
import * as s from './style.css';
import type { ChatRoomInterface } from '@/features/chatRoom/types';
import { ALLOWED_EXTENSIONS } from '@/libs/constants';

interface Props {
  data: ChatRoomInterface;
}

// TODO: 사진 선택 후 동작 붙이기
export const ChatRoomFooter = ({ data }: Props) => {
  return (
    <footer className={s.Wrapper}>
      <div className={s.Container}>
        <label>
          <input
            type="file"
            accept={ALLOWED_EXTENSIONS.map(val => '.' + val).join()}
            multiple
            // onChange={}
            className={s.Input}
          />
          <div className={cx('mgc_camera_2_fill', s.Icon)} />
        </label>

        <InputField chatRoomId={data.chatRoomId} />
      </div>
    </footer>
  );
};

export default ChatRoomFooter;
