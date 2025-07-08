import { css } from '@styled-system/css';

export const Container = css({
  overflowY: 'auto',
  paddingBottom: '1rem',
  display: 'flex',
  width: 'full',
  flexDir: 'column',
  alignItems: 'stretch',
  gap: '1rem',
});

export const WriteButtonContainer = css({
  position: 'absolute',
  right: '0.99rem',
});
