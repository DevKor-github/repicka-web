import { css } from '@styled-system/css';

export const Container = css({
  w: 'full',
  h: '6.25rem',
  display: 'flex',
  alignItems: 'stretch',
  gap: '1rem',
});

export const Image = css({
  w: '6.25rem',
  h: '6.25rem',
  borderRadius: '12.5px',
  objectFit: 'cover',
});

export const Info = css({
  flex: '1 0 0',
  display: 'flex',
  flexDir: 'column',
  justifyContent: 'space-between',
  padding: '0.25rem 0',
});

export const Header = css({
  display: 'flex',
  flexDir: 'column',
  gap: '0.25rem',
});

export const Title = css({
  color: '100',
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: 1.2,
  letterSpacing: '-0.04rem',
});

export const Price = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.875rem',
});

export const PriceItem = css({
  display: 'flex',
  alignItems: 'baseline',
  gap: '0.25rem',
  '& label': {
    color: '54',
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: '-0.035rem',
  },
  '& p': {
    color: '100',
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: '-0.04rem',
  },
});

export const Footer = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Tokens = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
});

export const Interactions = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.875rem',
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
