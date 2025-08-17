import { css, cva } from '@styled-system/css';

export const Container = css({
  w: 'full',
  h: '6.5rem',
  display: 'flex',
  alignItems: 'stretch',
  gap: '1rem',
});

export const Image = css({
  w: '6.5rem',
  h: '6.5rem',
  borderRadius: '0.78125rem',
  objectFit: 'cover',
  flexShrink: 0,
});

export const Wrapper = css({
  display: 'flex',
  flexDir: 'column',
  flex: 1,
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
  flex: 1,
  flexDir: 'column',
  gap: '0.25rem',
  alignItems: 'stretch',
});

export const Heart = css({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.25rem',
});

export const LikeButton = cva({
  base: {
    cursor: 'pointer',
    fontSize: '2.25rem',
    transition: 'all 0.2s ease-in-out',
  },
  variants: {
    isLiked: {
      true: {
        color: 'main',
      },
      false: {
        color: 'systemGray',
      },
    },
  },
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
