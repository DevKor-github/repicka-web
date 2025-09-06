import { createContext, type ReactNode } from 'react';

export const OverlayContext = createContext<{
  mount(id: string, element: ReactNode): void;
  unmount(id: string): void;
} | null>(null);
if (process.env.NODE_ENV !== 'production') {
  OverlayContext.displayName = 'OverlayContext';
}
