import { css } from '@styled-system/css';

export const entireLayout = css({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const innerPage = css({
  flex: 1,
  overflowY: 'auto',
  padding: '1.56rem 1rem 1.56rem 1rem',
  backgroundColor: 'main',
});
