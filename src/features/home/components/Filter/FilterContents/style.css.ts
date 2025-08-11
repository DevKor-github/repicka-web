import { css, cva } from '@styled-system/css';

export const Container = css({
  width: 'full',
  mt: '1.3125rem',
  height: '19rem',
});

export const TagOptionButtonWrapper = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
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
