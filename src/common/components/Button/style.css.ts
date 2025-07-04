import { cva } from '@styled-system/css';

export const Button = cva({
  base: {
    display: 'flex',
    gap: '0.625rem',
    flexShrink: '0',
    justifyContent: 'center',
    padding: '0.625rem',
    borderRadius: '0.375rem',
    width: '100%',
    height: '3.125rem',
    fontFamily: 'Pretendard',
    fontSize: '1.25rem',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
    letterSpacing: '-0.05rem',
  },
  variants: {
    color: {
      main: {
        backgroundColor: 'main',
        color: '100',
      },
      gray: {
        backgroundColor: 'systemGray5',
        color: '100',
      },
      softgray: {
        backgroundColor: 'systemGray5',
        color: '80',
      },
      deemedgray: {
        backgroundColor: 'systemGray5',
        color: '54',
      },
    },
  },
});
