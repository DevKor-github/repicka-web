import { css, cva } from '@styled-system/css';

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

export const Notification = css({
  color: '54',
  w: 'fit-content',
  textAlign: 'center',
  fontSize: '0.75rem',
  fontFamily: 'Pretendard',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: 'normal',
  letterSpacing: '-0.03rem',
  p: '0.625rem 0.875rem',
  bg: 'systemGray5',
  borderRadius: 'full',
  marginTop: '2.25rem',
  display: 'flex',
  alignSelf: 'center',
});
