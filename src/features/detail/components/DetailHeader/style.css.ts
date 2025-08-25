import { css } from '@styled-system/css';

export const Filter = css({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '6.6875rem',
  background: 'linear-gradient(180deg, #1A1A1A 0%, rgba(26, 26, 26, 0.00) 100%)',
  zIndex: 9,
  pointerEvents: 'none',
});

export const Container = css({
  position: 'absolute',
  right: 0,
  left: 0,
  top: 'calc(env(safe-area-inset-top))',
  p: '0.625rem 1.25rem',
  d: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '100',
  zIndex: 10,
  pointerEvents: 'none',
});

export const BackButton = css({
  fontSize: '1.625rem',
  cursor: 'pointer',
  pointerEvents: 'auto',
});

export const RightSide = css({
  d: 'flex',
  alignItems: 'center',
  gap: '0.625rem',
  pointerEvents: 'auto',
});

export const RightButton = css({
  fontSize: '1.5rem',
  cursor: 'pointer',
});
