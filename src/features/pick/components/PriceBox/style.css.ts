import { css, cva } from '@styled-system/css';

export const Container = css({
  display: 'flex',
  p: '0.875rem 1rem',
  flexDir: 'column',
  gap: '0.625rem',
  alignItems: 'stretch',
  rounded: '0.375rem',
  bgColor: 'systemGray5',
});

export const PriceItem = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.625rem',
    '& > label': {
      flexShrink: 0,
      width: '3.75rem',
      color: '100',
      fontWeight: 400,
      lineHeight: 'normal',
      letterSpacing: '-0.04rem',
      fontSize: '1rem',
    },
    '& > div': {
      flex: '1 0 0',
      display: 'flex',
      alignItems: 'center',
      gap: '0.625rem',
      fontSize: '1rem',
      color: '80',
      fontWeight: 600,
      letterSpacing: '-0.04rem',
      lineHeight: 'normal',
    },
    '& input': {
      flex: '1 0 0',
      width: 'full',
      height: '2.75rem',
      px: '0.875rem',
      rounded: '0.375rem',
      border: '1px solid',
      borderColor: 'systemGray3',
      bgColor: 'systemGray4',
      outline: 'none',
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 'normal',
      letterSpacing: '-0.04rem',
      '&::placeholder': {
        color: '20',
      },
    },
  },
  variants: {
    label: {
      canDeal: {
        '& > div': {
          color: 'main',
        },
      },
    },
  },
});
