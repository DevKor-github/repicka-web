import { cva } from '@styled-system/css';

export const Container = cva({
  base: {
    display: 'flex',
    padding: '0.25rem 0.375rem',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.375rem',

    borderRadius: '0.375rem',
    bg: 'systemGray2',

    fontFamily: 'Pretendard',
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
    letterSpacing: '-0.03rem',
  },
  variants: {
    bg: {
      main: {
        bg: 'main',
      },
      systemGray2: {
        bg: 'systemGray2',
      },
      systemGray5: {
        bg: 'systemGray5',
      },
    },
    color: {
      '100': {
        color: '100',
      },
      '54': {
        color: '54',
      },
    },
  },
});

export const Icon = cva({
  base: {
    fontSize: '1rem',
  },
  variants: {
    iconColor: {
      systemGray2: {
        color: 'systemGray2',
      },
      '100': {
        color: '100',
      },
      '54': {
        color: '54',
      },
    },
  },
});
