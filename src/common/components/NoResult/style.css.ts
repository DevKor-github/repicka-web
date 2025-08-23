import { css } from '@styled-system/css';

export const Container = css({
  display: 'flex',
  flexDir: 'column',
  gap: '1rem',
  alignItems: 'center',
});

export const Icon = css({
  fontSize: '3rem',
  color: 'main',
});

export const Text = css({
  display: 'flex',
  flexDir: 'column',
  alignItems: 'center',
  gap: '0.375rem',
  color: '100',
  fontSize: '1.25rem',
  fontWeight: 600,
  lineHeight: 1.4,
  letterSpacing: '-0.05rem',
});

export const Description = css({
  color: '80',
  fontSize: '1rem',
  fontWeight: 400,
  letterSpacing: '-0.04rem',
  whiteSpace: 'pre-wrap',
  textAlign: 'center',
});
