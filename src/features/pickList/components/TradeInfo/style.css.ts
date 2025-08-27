import { css, cva } from '@styled-system/css';

export const Wrapper = css({
  display: 'flex',
  flex: 1,
  w: '100%',
  gap: '0.25rem',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Icon = css({
  fontSize: '1.125rem',
  background: 'linear-gradient(128deg, #0F71FF 16.45%, #FF0004 102.04%)',
  backgroundClip: 'text',
  color: 'transparent',
});

export const TradeInfo = css({
  display: 'flex',
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const TradeDate = cva({
  base: {
    fontFamily: ' Pretendard',
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
    letterSpacing: '-0.03rem',
  },
  variants: {
    isComplete: {
      true: {
        color: '54',
      },
      false: {
        color: '80',
      },
    },
  },
});

export const InProgress = css({
  display: 'flex',
  padding: '0.1875rem 0.375rem',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '2.5rem',
  border: '1px solid rgba(248, 62, 0, 0.54)',

  color: 'main',
  fontFamily: ' Pretendard',
  fontSize: '0.625rem',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '-0.025rem',
});
