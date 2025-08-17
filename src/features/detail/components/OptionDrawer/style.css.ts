import { css } from '@styled-system/css';

export const Container = css({
  display: 'flex',
  flexDir: 'column',
  gap: '0.5rem',
  mx: '1rem',
});

export const Divider = css({
  h: '1px',
  width: 'full',
  bgColor: 'systemGray5',
});

export const Button = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.875rem',
  h: '3.125rem',
  w: 'full',
  color: '80',
  fontSize: '1.125rem',
  fontWeight: 500,
  '& span': {
    fontSize: '1.25rem',
  },
});
