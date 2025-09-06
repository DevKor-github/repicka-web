import { OverlayContext } from '@/common/utils/OverlayProvider/OverlayContext';
import React, { useCallback, useMemo, useState, type PropsWithChildren, type ReactNode } from 'react';

export function OverlayProvider({ children }: PropsWithChildren) {
  const [overlayById, setOverlayById] = useState<Map<string, ReactNode>>(new Map());

  const mount = useCallback((id: string, element: ReactNode) => {
    setOverlayById(overlayById => {
      const cloned = new Map(overlayById);
      cloned.set(id, element);
      return cloned;
    });
  }, []);

  const unmount = useCallback((id: string) => {
    setOverlayById(overlayById => {
      const cloned = new Map(overlayById);
      cloned.delete(id);
      return cloned;
    });
  }, []);

  const context = useMemo(() => ({ mount, unmount }), [mount, unmount]);

  return (
    <OverlayContext.Provider value={context}>
      {children}
      {[...overlayById.entries()].map(([id, element]) => (
        <React.Fragment key={id}>{element}</React.Fragment>
      ))}
    </OverlayContext.Provider>
  );
}
