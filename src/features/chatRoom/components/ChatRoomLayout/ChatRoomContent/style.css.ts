import { css } from '@styled-system/css';

export const Wrapper = css({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  overflowY: 'auto',
  padding: 'calc({sizes.HEADER_HEIGHT} + 1.375rem) 1rem 1rem 1rem',
});
