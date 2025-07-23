import { useCallback, useEffect, useRef, useState, type PropsWithChildren } from 'react';
import { cx } from '@styled-system/css';
import { motion, type PanInfo } from 'framer-motion';

import * as s from './style.css';

interface DrawerBodyProps extends PropsWithChildren {
  title: string;
  description?: string;
  close: () => void;
}

const DrawerBody = ({ children, title, description, close }: DrawerBodyProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // UI 페인팅 이후 계산
    if (contentRef.current) {
      setHeight(Math.min(contentRef.current.clientHeight, window.innerHeight));
    }
  }, [children]);

  const onDragEnd = useCallback(
    (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const offsetThreshold = 150;
      const deltaThreshold = 5;

      const isOverOffsetThreshold = Math.abs(info.offset.y) > offsetThreshold;
      const isOverDeltaThreshold = Math.abs(info.delta.y) > deltaThreshold;

      const isOverThreshold = isOverOffsetThreshold || isOverDeltaThreshold;

      if (!isOverThreshold) return;

      if (info.offset.y >= 0) close();
    },
    [close],
  );

  return (
    <motion.div
      key="drawer_body"
      className={s.Container}
      drag={'y'}
      dragConstraints={{ top: 0, bottom: 0 }}
      transition={{ duration: 0.2 }}
      dragElastic={0.4}
      variants={{
        opened: { top: `calc(100dvh - ${height}px)` },
        closed: { top: '100dvh' },
      }}
      initial={'closed'}
      animate={'opened'}
      exit={'closed'}
      onDragEnd={onDragEnd}
    >
      <header className={s.Header}>
        <div className={s.HeaderTitle}>
          <span className={s.Title}>{title}</span>
          {description && <span className={s.Description}>{description}</span>}
        </div>
        <button className={cx('mgc_close_line')} onClick={close} />
      </header>
      <div ref={contentRef} className={s.Content}>
        {children}
      </div>
    </motion.div>
  );
};

export default DrawerBody;
