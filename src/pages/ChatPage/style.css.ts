import { css } from '@styled-system/css';

export const Wrapper = css({
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  gap: '2.25rem',
  overflowY: 'auto',
  height: 'calc(100% - {sizes.NAVIGATOR_HEIGHT})',
});
