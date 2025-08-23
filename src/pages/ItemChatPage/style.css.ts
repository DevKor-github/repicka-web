import { css, cva } from '@styled-system/css';

export const Wrapper = css({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  overflowY: 'auto',
  h: '100%',
});

export const Content = cva({
  base: {
    display: 'flex',
    flexDir: 'column',
    p: '1rem',
    overflowY: 'auto',
    gap: '2.25rem',
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

export const NoResult = css({
  display: 'flex',
  flexDir: 'column',
  gap: '1rem',
  alignItems: 'center',
});

export const Button = css({
  width: '17rem',
});
