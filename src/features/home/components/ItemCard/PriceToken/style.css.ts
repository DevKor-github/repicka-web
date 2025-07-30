import { css } from '@styled-system/css';

export const Wrapper = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.875rem',
  height: '1.375rem',
});

export const PriceItem = css({
  display: 'flex',
  alignItems: 'baseline',
  gap: '0.25rem',
  lineHeight: 1.4,
  '& > label': {
    color: '54',
    fontSize: '0.75rem',
    fontWeight: 500,
    letterSpacing: '-0.03rem',
  },
  '& > p': {
    color: '100',
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '-0.035rem',
  },
});
