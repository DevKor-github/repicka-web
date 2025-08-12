import { css, cva } from '@styled-system/css';

export const Container = css({
  height: 'full',
  display: 'flex',
  flexDir: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  pb: '3.75rem',
  px: '1rem',
  gap: '1.875rem',
  position: 'relative',
});

export const Header = css({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  p: '0.625rem 1.25rem',
  d: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  zIndex: 10,
  pointerEvents: 'none',
  '& button': {
    color: '100',
    fontSize: '2.25rem',
    cursor: 'pointer',
    pointerEvents: 'auto',
  },
});

export const Label = css({
  color: '80',
  fontSize: '0.875rem',
  fontWeight: 500,
  lineHeight: 'normal',
});

export const ButtonContainer = css({
  display: 'flex',
  flexDir: 'column',
  gap: '0.5rem',
  width: 'full',
});

export const LoginButton = cva({
  base: {
    display: 'flex',
    width: 'full',
    height: '3.125rem',
    rounded: '0.375rem',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.125rem',
    fontWeight: 600,
    lineHeight: 1.5,
  },
  variants: {
    src: {
      apple: {
        bgColor: '#FFF',
        color: '#000',
        fontWeight: 590,
        fontFamily: 'SF Pro',
      },
      google: {
        bgColor: '#F2F2F2',
        gap: '0.75rem',
        color: '#1F1F1F',
      },
      kakao: {
        bgColor: '#FEE500',
        gap: '0.8rem',
        color: 'rgba(0, 0, 0, 0.85)',
      },
    },
  },
});
