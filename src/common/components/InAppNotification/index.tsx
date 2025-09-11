import { UserProfileImage } from '../UserProfileImage';
import { motion } from 'motion/react';
import * as s from './style.css';
import getImageUrl from '@/common/utils/getImageUrl';
import { useNavigate } from 'react-router';

interface Props {
  isOpen: boolean;
  nickname: string | null;
  profileImage: string | null;
  content: string | null;
  chatRoomId: number;
}

const InAppNotification = ({ isOpen, nickname, profileImage, content, chatRoomId }: Props) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className={s.Container}
      onClick={() => {
        navigate(`/chat/${chatRoomId}`);
      }}
      initial={{ opacity: 0, translateX: '-50%' }}
      animate={isOpen ? { opacity: 1, translateX: '-50%', translateY: '50%' } : { opacity: 0, translateX: '-50%' }}
    >
      <UserProfileImage nickname={nickname ?? ''} src={getImageUrl(profileImage ?? '')} />
      <div className={s.Content}>
        <div className={s.Title}>{nickname}</div>
        <div className={s.Disc}>{content}</div>
      </div>
    </motion.div>
  );
};

export default InAppNotification;

// import { motion } from 'motion/react';

// import * as s from './style.css';

// import { TOAST_ANIMATION_DURATION } from '@/common/hooks/useToast';

// interface ToastProps {
//   isOpen: boolean;
//   message: string;
// }
// const Toast = ({ isOpen, message }: ToastProps) => {
//   return (
//     <div className={s.Layout}>
//       <motion.div
//         className={s.Container}
//         initial={{ opacity: 0, translateY: 66 }}
//         animate={isOpen ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 66 }}
//         transition={{ duration: TOAST_ANIMATION_DURATION / 1000, type: 'spring' }}
//       >
//         {message}
//       </motion.div>
//     </div>
//   );
// };

// export default Toast;
