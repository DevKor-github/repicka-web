import { css } from '@styled-system/css';

export const Container = css({
  position: 'absolute',
  right: 0,
  left: 0,
  p: '0.625rem 1.25rem',
  d: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '100',
});

export const BackButton = css({
  fontSize: '2.25rem',
  cursor: 'pointer',
});

export const RightSide = css({
  d: 'flex',
  alignItems: 'center',
  gap: '0.625rem',
});

export const RightButton = css({
  fontSize: '1.5rem',
  cursor: 'pointer',
});
