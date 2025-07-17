import { cva } from '@styled-system/css';

export const Button = cva({
  base: {
    display: 'flex',
    gap: '0.625rem',
    flexShrink: '0',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.625rem',
    borderRadius: '0.375rem',
    height: '3.125rem',
    fontFamily: 'Pretendard',
    fontSize: '1.25rem',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
    letterSpacing: '-0.05rem',
    transition: 'background 0.3s ease-in-out, color 0.3s ease-in-out',
    cursor: 'pointer',
  },
  variants: {
    mode: {
      main: {
        backgroundColor: 'main',
        color: '100',
      },
      default: {
        backgroundColor: 'systemGray5',
        color: '80',
      },
      back: {
        backgroundColor: 'systemGray5',
        color: '54',
      },
      unActive: {
        backgroundColor: 'systemGray5',
        color: '20',
      },
    },
  },
});
