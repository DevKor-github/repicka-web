import { css, cva } from '@styled-system/css';

export const Container = css({
  flexShrink: 0,
  display: 'flex',
  p: '0 1rem 2.625rem 1rem',
  gap: '0.625rem',
  alignItems: 'center',
});

export const Button = cva({
  base: {
    h: '3.125rem',
    flex: '1 0 0',
    rounded: '0.375rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.25rem',
    fontWeight: 500,
    lineHeight: 'normal',
    letterSpacing: '-0.05rem',
  },
  variants: {
    color: {
      gray: {
        bgColor: 'systemGray4',
        color: '54',
      },
      main: {
        bgColor: 'main',
        color: '100',
      },
    },
  },
});
