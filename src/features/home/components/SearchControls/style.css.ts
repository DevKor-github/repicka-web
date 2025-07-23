import { css } from '@styled-system/css';

export const Container = css({
  display: 'flex',
  flexDir: 'column',
  gap: '1rem',
});

export const ResultBar = css({
  display: 'flex',
  px: '1.25rem',
  h: '1.4375rem',
  w: 'full',
  gap: '0.25rem',
  alignItems: 'center',
  color: '100',
  fontSize: '0.875rem',
  fontWeight: 500,
  lineHeight: 1.4,
  letterSpacing: '-0.0255rem',
});

export const ResultCount = css({
  fontSize: '0.75rem',
  fontWeight: 400,
});

export const SelectButtonContainer = css({
  display: 'flex',
  px: '1rem',
  alignItems: 'center',
  gap: '0.375rem',
});
