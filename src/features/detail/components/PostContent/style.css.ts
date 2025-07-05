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
  color: '54',
  fontWeight: 400,
  '& > p': {
    fontSize: '0.75rem',
    lineHeight: 1.4,
    letterSpacing: '-0.03rem',
  },
  '& > span': {
    width: '0.5px',
    height: '0.5625rem',
    bgColor: '54',
  },
});

export const InteractionContainer = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

export const InteractionItem = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.12rem',
  '& > span': {
    fontSize: '1rem',
  },
  '& p': {
    fontSize: '0.625rem',
    lineHeight: 1.2,
    letterSpacing: '-0.025rem',
  },
});

export const TextContent = css({
  width: 'full',
  color: '100',
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: 1.4,
  letterSpacing: '-0.035rem',
});

export const TokenContainer = css({
  display: 'flex',
  gap: '0.375rem',
  flexWrap: 'wrap',
  alignItems: 'center',
});
