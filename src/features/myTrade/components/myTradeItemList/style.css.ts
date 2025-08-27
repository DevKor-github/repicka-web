import { css, cva } from '@styled-system/css';

export const Container = cva({
  base: {
    display: 'flex',
    flexDir: 'column',
    gap: '1rem',
  },
  variants: {
    isEmpty: {
      true: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      },
    },
  },
});

export const Wrapper = css({
  display: 'flex',
  flexDir: 'column',
  flex: 1,
  h: '100%',
});

export const NoResult = css({
  display: 'flex',
  flexDir: 'column',
  gap: '1rem',
  alignItems: 'center',
});

export const Content = cva({
  base: {
    display: 'flex',
    flexDir: 'column',
    p: '1rem',
    overflowY: 'auto',
    gap: '1rem',
    w: '100%',
  },
  variants: {
    isEmpty: {
      true: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      },
    },
  },
});

export const Button = css({
  width: '17rem',
});
