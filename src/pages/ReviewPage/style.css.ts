import { css } from '@styled-system/css';

export const Layout = css({
  display: 'flex',
  flex: 1,
  h: '100%',
  flexDir: 'column',
  justifyContent: 'space-between',
});

export const Wrapper = css({
  flex: '1 0 0',
  overflowY: 'auto',
});

export const Btn = css({
  p: '1rem 1rem 2.625rem 1rem',
  flexShrink: 0,
});
