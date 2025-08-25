import { motion } from 'motion/react';

import * as s from './style.css';

import { TOAST_ANIMATION_DURATION } from '@/common/hooks/useToast';

interface ToastProps {
  isOpen: boolean;
  message: string;
}
const Toast = ({ isOpen, message }: ToastProps) => {
  return (
    <div className={s.ToastLayout}>
      <motion.div
        className={s.ToastContainer}
        initial={{ opacity: 0, translateY: 66 }}
        animate={isOpen ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 66 }}
        transition={{ duration: TOAST_ANIMATION_DURATION / 1000, type: 'spring' }}
      >
        {message}
      </motion.div>
    </div>
  );
};

export default Toast;
