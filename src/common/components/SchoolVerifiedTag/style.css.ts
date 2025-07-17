import { css } from '@styled-system/css';

export const Container = css({
  padding: '0.1rem 0.275rem',
  fontSize: '0.625rem',
  fontWeight: 400,
  lineHeight: 1.4,
  letterSpacing: '-0.025rem',
  color: 'main',
  display: 'flex',
  alignItems: 'center',
  gap: '0.22rem',
  borderRadius: '0.25rem',
  backgroundColor: 'main-26',
  '& > p': {
    color: '100',
  },
});
