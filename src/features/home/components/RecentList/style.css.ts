import { css } from '@styled-system/css';

export const Wrapper = css({
  display: 'flex',
  flexDir: 'column',
  gap: '0.625rem',
  px: '1rem',
  w: 'full',
});

export const Title = css({
  color: '100',
  fontSize: '1rem',
  lineHeight: 1.4,
  letterSpacing: '-0.0255rem',
  fontWeight: 600,
});

export const ItemList = css({
  display: 'flex',
  flexDir: 'column',
  gap: '1rem',
});
