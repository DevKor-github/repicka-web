import { css } from '@styled-system/css';

export const entireLayout = css({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const innerPage = css({
  flex: 1,
  overflowY: 'auto',
  padding: 'calc({sizes.HEADER_HEIGHT} + 1.375rem) 1rem 1rem 1rem',
});
