import { css } from '@styled-system/css';

export const Container = css({
  width: '100%',
  height: '24.375rem',
  position: 'relative',
});

export const Filter = css({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  height: '6.6875rem',
  background: 'linear-gradient(180deg, #1A1A1A 0%, rgba(26, 26, 26, 0.00) 100%)',
});

export const Image = css({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
});
