import { useState } from 'react';

interface DrawerOption {
  hasBackdrop?: boolean;
}

export interface DrawerState {
  isOpen: boolean;
  close: () => void;
  hasBackdrop: boolean;
}

/**
 * 쓰고 싶다면 useDrawer에서 drawerState를 받아서
 * Drawer 컴포넌트에 전달해주시면 되고
 * 그담에 open(), close()로 제어하면 됨
 */
const useDrawer = (option: DrawerOption = {}) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const drawerState: DrawerState = {
    isOpen,
    close,
    hasBackdrop: option.hasBackdrop ?? true,
  };

  return {
    open,
    close,
    drawerState,
  };
};

export default useDrawer;
