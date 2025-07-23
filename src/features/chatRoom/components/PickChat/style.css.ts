import { css, cva } from '@styled-system/css';

export const Container = cva({
  base: {
    display: 'flex',
    w: 'CHAT_MAX_WIDTH',
    padding: '0.75rem',
    flexDir: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.625rem',
    backgroundColor: 'systemGray4',
  },
  variants: {
    isMine: {
      true: {
        alignSelf: 'flex-end',
        borderRadius: '0.625rem 0rem 0.625rem 0.625rem',
      },
      false: {
        alignSelf: 'flex-start',
        borderRadius: '0rem 0.625rem 0.625rem 0.625rem',
      },
    },
  },
});

export const HeadText = css({
  color: '100',
  fontFamily: 'Pretendard',
  fontSize: '0.875rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
  letterSpacing: '-0.035rem',
  wordBreak: 'keep-all',
});

export const Image = css({
  w: '100%',
  h: '8.75406rem',
  flexShrink: 0,
  borderRadius: '0.375rem',
  backgroundColor: 'systemGray',
});

export const PickBtn = css({
  display: 'flex',
  padding: '0.5625rem 4.125rem',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'stretch',
  borderRadius: '0.375rem',
  backgroundColor: 'main',
});

export const PickText = css({
  color: '100',
  fontFamily: 'Pretendard',
  fontSize: '0.875rem',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
  letterSpacing: '-0.035rem',
});
