import { AnimatePresence } from 'motion/react';
import { type ReactNode } from 'react';

import BackLayer from '@/common/components/Drawer/BackLayer';
import DrawerBody from '@/common/components/Drawer/DrawerBody';
import type { DrawerState } from '@/common/hooks/useDrawer';

interface DrawerProps {
  drawerState: DrawerState;
  children: ReactNode;
}
const Drawer = ({ drawerState, children }: DrawerProps) => {
  return (
    <AnimatePresence>
      {drawerState.isOpen && (
        <>
          <BackLayer close={drawerState.close} hasBackdrop={drawerState.hasBackdrop} />
          <DrawerBody close={drawerState.close}>{children}</DrawerBody>
        </>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
