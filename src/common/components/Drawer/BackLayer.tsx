import { motion } from 'motion/react';

import * as s from './style.css';

interface BackLayerProps {
  close: () => void;
  hasBackdrop: boolean;
}
const BackLayer = ({ close, hasBackdrop }: BackLayerProps) => {
  return (
    <motion.div
      className={s.BackLayerStyle}
      variants={{
        opened: { opacity: hasBackdrop ? 1 : 0 },
        closed: { opacity: 0 },
      }}
      initial={'closed'}
      animate={'opened'}
      exit={'closed'}
      onClick={close}
    />
  );
};

export default BackLayer;
