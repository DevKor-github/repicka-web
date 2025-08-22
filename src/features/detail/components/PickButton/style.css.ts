import { cva } from '@styled-system/css';

export const Container = cva({
  base: {
    flexGrow: 1,
    flexBasis: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDir: 'column',
    gap: '0.25rem',
    height: 'full',
    overflow: 'hidden',
    rounded: '0.375rem',
    '& > span': {
      color: '80',
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 'normal',
      letterSpacing: '-0.04rem',
    },
    '& > p': {
      color: '100',
      fontSize: '0.75rem',
      fontWeight: 600,
      lineHeight: 'normal',
      letterSpacing: '-0.03rem',
    },
  },
  variants: {
    color: {
      red: {
        bgColor: 'main',
      },
      blue: {
        bgColor: '#3978FF',
      },
    },
  },
});
