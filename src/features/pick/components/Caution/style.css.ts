import { css } from '@styled-system/css';

export const Container = css({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.25rem',
  color: '80',
  '& span': {
    fontSize: '1rem',
    height: '1.2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '& p': {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.4,
    letterSpacing: '-0.035rem',
    wordBreak: 'keep-all',
  },
});
