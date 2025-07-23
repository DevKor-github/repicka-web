import { css, cva } from '@styled-system/css';

export const Wrapper = css({
  display: 'flex',
  flexDirection: 'column',
});

export const Date = cva({
  base: {
    color: '54',
    textAlign: 'center',
    fontSize: '0.625rem',
    fontFamily: 'Pretendard',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    letterSpacing: '-0.025rem',
  },
  variants: {
    isFirst: {
      true: {
        marginTop: '0',
      },
      false: {
        marginTop: '2.25rem',
      },
    },
  },
});
