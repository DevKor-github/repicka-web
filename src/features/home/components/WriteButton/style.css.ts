import { css } from '@styled-system/css';

export const Container = css({
  d: 'flex',
  p: '0.4375rem 1.25rem',
  rounded: 'full',
  bgColor: 'main',
  boxShadow: '0px 0px 4px 0px rgba(248, 62, 0, 0.50)',
  alignItems: 'center',
  gap: '0.375rem',
  cursor: 'pointer',
  '& span': {
    fontSize: '0.9375rem',
  },
  '& p': { color: '100', fontSize: '1rem', fontWeight: 600, lineHeight: 1.4, letterSpacing: '-0.0255rem' },
});
