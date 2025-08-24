import { css, cva } from '@styled-system/css';

export const Container = css({
  pt: '2.5rem',
  px: '1rem',
  display: 'flex',
  flexDir: 'column',
  gap: '4.375rem',
});

export const DateFilterWrapper = css({
  display: 'flex',
  flexDir: 'column',
  gap: '1.4375rem',
});

export const SelectedDateWrapper = css({
  display: 'flex',
  gap: '1rem',
});

export const SelectedDateItem = css({
  display: 'flex',
  flexDir: 'column',
  gap: '0.375rem',
  flex: '1 0 0',
  color: '100',
  fontSize: '1rem',
  '& label': {
    fontWeight: 600,
    letterSpacing: '-0.04rem',
  },
  '& div': {
    rounded: '0.375rem',
    bg: 'systemGray4',
    width: 'full',
    height: '2.75rem',
    px: '0.625rem',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 400,
  },
});

export const FilterButtonWrapper = css({
  display: 'flex',
  gap: '0.625rem',
  alignItems: 'stretch',
  height: '3.125rem',
});

export const FilterButton = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    rounded: '0.375rem',
  },
  variants: {
    type: {
      reset: {
        width: '4.625rem',
        flexShrink: 0,
        bgColor: 'systemGray4',
        color: '80',
        fontSize: '1.5rem',
      },
      result: {
        flex: '1 0 0',
        bgColor: 'main',
        color: '100',
        fontSize: '1.25rem',
        fontWeight: 500,
        letterSpacing: '-0.05rem',
      },
    },
  },
});
