import { AnimatePresence } from 'motion/react';
import { type ReactNode } from 'react';

import BackLayer from '@/common/components/Drawer/BackLayer';
import DrawerBody from '@/common/components/Drawer/DrawerBody';
import type { DrawerState } from '@/common/hooks/useDrawer';

interface DrawerProps {
  title: string;
  description?: string;
  drawerState: DrawerState;
  children: ReactNode;
}
const Drawer = ({ drawerState, title, description, children }: DrawerProps) => {
  return (
    <AnimatePresence>
      {drawerState.isOpen && (
        <>
          <BackLayer close={drawerState.close} hasBackdrop={drawerState.hasBackdrop} />
          <DrawerBody close={drawerState.close} title={title} description={description}>
            {children}
          </DrawerBody>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
