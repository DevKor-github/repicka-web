import { cva } from '@styled-system/css';

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
