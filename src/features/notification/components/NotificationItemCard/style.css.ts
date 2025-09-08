import { css, cva } from '@styled-system/css';

export const Wrapper = cva({
  base: {
    display: 'flex',
    flexDir: 'column',
    gap: '0.625rem',
    padding: '0.875rem 1.25rem 1.125rem 1.25rem',
  },
  variants: {
    isRemind: {
      true: {
        bg: 'systemGray5',
      },
    },
    isDeleted: {
      true: {
        opacity: 0.2,
      },
    },
  },
});

export const Container = css({
  w: 'full',
  h: '6.5rem',
  display: 'flex',
  alignItems: 'stretch',
  gap: '1rem',
});

export const RemindTime = css({
  display: 'flex',
  flex: 1,
  justifyContent: 'space-between',
});

export const Type = css({
  display: 'flex',
  gap: '0.25rem',
  alignItems: 'center',
});

export const Icon = cva({
  base: {
    fontSize: '1.125rem',
    backgroundClip: 'text',
    color: 'transparent',
  },
  variants: {
    icon: {
      mgc_sob_fill: {
        background: 'linear-gradient(180deg, #3F2EFF 0%, #FF9F18 100%);',
      },
      mgc_emoji_fill: {
        background: 'linear-gradient(180deg, #FF9F05 0%, #FFC505 81.73%)',
      },
      mgc_t_shirt_fill: {
        background: 'linear-gradient(128deg, #0F71FF 16.45%, #FF0004 102.04%)',
      },
      mgc_hands_clapping_fill: {
        bg: 'linear-gradient(142deg, #FFB200 -0.11%, #F83E00 100.8%)',
      },
    },
  },
});

export const Label = css({
  color: '80',
  fontFamily: 'Pretendard',
  fontSize: '0.875rem',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '-0.035rem',
});

export const Date = css({
  display: 'flex',
  gap: '0.38rem',

  color: '54',
  fontFamily: 'Pretendard',
  fontSize: '0.75rem',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
  letterSpacing: '-0.03rem',
});

export const Image = css({
  w: '6.5rem',
  h: '6.5rem',
  borderRadius: '0.78125rem',
  objectFit: 'cover',
  flexShrink: 0,
});

export const Info = css({
  flex: '1 0 0',
  display: 'flex',
  flexDir: 'column',
  justifyContent: 'space-between',
  padding: '0.125rem 0',
  overflow: 'hidden',
});

export const Header = css({
  display: 'flex',
  flexDir: 'column',
  gap: '0.25rem',
  alignItems: 'flex-start',
});

export const Title = css({
  color: '100',
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '-0.04rem',
  lineClamp: 1,
});

export const Price = css({
  display: 'flex',
  flexDir: 'column',
});

export const Footer = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: 'full',
  gap: '0.25rem',
});

export const Tokens = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  overflowX: 'auto',
});

export const Interactions = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.625rem',
  flexShrink: 0,
});

export const InteractionItem = css({
  display: 'flex',
  alignItems: 'flex-end',
  gap: '0.1875rem',
  color: '54',
  '& span': {
    fontSize: '1rem',
  },
  '& p': {
    fontSize: '0.75rem',
    fontWeight: 400,
    letterSpacing: '-0.03rem',
    lineHeight: 1.2,
  },
});
