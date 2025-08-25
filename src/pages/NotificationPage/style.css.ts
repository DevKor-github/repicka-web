import { css, cva } from '@styled-system/css';

export const Wrapper = css({
  display: 'flex',
  flexDir: 'column',
  flex: 1,
  height: 'calc(100%  - {sizes.HEADER_HEIGHT})',
  bg: 'sys5',
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
    overflowY: 'auto',
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
