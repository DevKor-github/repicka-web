import { css } from '@styled-system/css';

export const PriceItem = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.375rem',
  '& > label': {
    padding: '0.125rem 0.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    rounded: '0.25rem',
    bgColor: 'systemGray4',
    color: '54',
    fontSize: '0.625rem',
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: '-0.025rem',
    flexShrink: 0,
  },
  '& p': {
    color: '100',
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: '-0.04rem',
    display: 'flex',
    gap: '0.375rem',
    alignItems: 'baseline',
    '& > label': {
      color: '54',
      fontSize: '0.875rem',
      fontWeight: 500,
      letterSpacing: '-0.035rem',
    },
  },
});
