import { css } from '@styled-system/css';

export const Container = css({
  display: 'flex',
  px: '1rem',
  gap: '2.5rem',
  flexDir: 'column',
  w: 'full',
});

export const TextContainer = css({
  display: 'flex',
  flexDir: 'column',
  gap: '1rem',
  w: 'full',
});

export const Header = css({
  display: 'flex',
  flexDir: 'column',
  gap: '0.25rem',
});

export const Title = css({
  color: '100',
  fontSize: '1.125rem',
  fontWeight: 600,
  lineHeight: 1.4,
  letterSpacing: '-0.045rem',
});

export const PriceContainer = css({
  display: 'flex',
  gap: '0.875rem',
  alignItems: 'center',
});

export const PriceItem = css({
  display: 'flex',
  alignItems: 'baseline',
  gap: '0.25rem',
  '& label': {
    color: '54',
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: '-0.04rem',
  },
  '& p': {
    color: '100',
    fontSize: '1.125rem',
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: '-0.045rem',
  },
});

export const PostInfoContainer = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.625rem',
  w: 'full',
});

export const TokenContainer = css({
  display: 'flex',
  gap: '0.375rem',
  flexWrap: 'wrap',
  alignItems: 'center',
});
