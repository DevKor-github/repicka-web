import { css } from '@styled-system/css';

export const Container = css({
  position: 'absolute',
  bottom: 0,
  top: 'calc(env(safe-area-inset-top))',
  left: 'calc(env(safe-area-inset-left))',
  right: 'calc(env(safe-area-inset-right))',
});
