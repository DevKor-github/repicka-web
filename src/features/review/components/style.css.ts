import { css, cva } from '@styled-system/css';

export const Wrapper = css({
  display: 'flex',
  flexDir: 'column',
  p: '1rem',
  gap: '2.25rem',
  justifyContent: 'center',

  color: '100',
  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '-0.04rem',
});

export const StarContainer = css({
  display: 'flex',
  w: '100%',
  p: '0.9375rem 2.4375rem',
  justifyContent: 'center',
  alignContent: 'center',
  gap: '0.625rem',
  alignSelf: 'stretch',
  borderRadius: '0.625rem',
  bg: 'systemGray5',
  fontSize: '2.25rem',
});

export const Star = cva({
  variants: {
    star: {
      true: {
        color: '80',
      },
      false: {
        color: '54',
      },
    },
  },
});

export const Content = css({
  display: 'flex',
  flex: 1,
  flexDir: 'column',
  gap: '1rem',
});
