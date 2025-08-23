import { css, cva } from '@styled-system/css';

export const Container = css({
  display: 'flex',
  flexDir: 'column',
  gap: '0.625rem',
});

export const PriceTagButton = cva({
  base: {
    width: 'full',
    height: '3.12063rem',
    p: '0.8125rem 0.6875rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    rounded: '0.5rem',
    border: '1px solid',
    transition: 'all 0.2s ease-in-out',
    fontSize: '1rem',
    letterSpacing: '-0.04rem',
  },
  variants: {
    isSelected: {
      true: {
        bgColor: 'main-26',
        borderColor: 'main-54',
        color: '100',
        fontWeight: 600,
      },
      false: {
        bgColor: 'systemGray5',
        borderColor: 'systemGray5',
        color: '80',
        fontWeight: 400,
      },
    },
  },
});

export const RightIcon = cva({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    w: '1.125rem',
    h: '1.125rem',
    flexShrink: 0,
    rounded: 'full',
    border: '1.5px solid',
    transition: 'all 0.2s ease-in-out',
    '& div': {
      w: '0.625rem',
      h: '0.625rem',
      rounded: 'full',
      transition: 'all 0.2s ease-in-out',
    },
  },
  variants: {
    isSelected: {
      true: {
        bgColor: 'main-54',
        borderColor: 'main',
        '& div': {
          bgColor: 'main',
        },
      },
      false: {
        bgColor: '20',
        borderColor: '54',
        '& div': {
          bgColor: 'transparent',
        },
      },
    },
  },
});

export const PriceWrapper = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '0.625rem',
});

export const CustomPriceInputContainer = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    transition: 'all 0.2s ease-in-out',
  },
  variants: {
    active: {
      true: { opacity: 1 },
      false: { opacity: 0.3 },
    },
  },
});

export const CustomPriceInput = css({
  width: '8.75rem',
  height: '2.25rem',
  pr: '0.75rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: '100',
  fontSize: '1rem',
  letterSpacing: '-0.04rem',
  gap: '0.25rem',
  bgColor: 'systemGray5',
  rounded: '0.375rem',
  '& input': {
    flexShrink: 0,
    width: 'full',
    height: 'full',
    flexGrow: 1,
    flexBasis: 0,
    fontWeight: 600,
    textAlign: 'right',
    pl: '0.75rem',
    '&:focus': {
      outline: 'none',
    },
  },
  '& span': {
    flexShrink: 0,
    fontWeight: 400,
  },
});
