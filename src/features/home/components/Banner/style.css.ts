import { css } from '@styled-system/css';

export const Container = css({
  position: 'relative',
  w: '100%',
});
export const Image = css({
  width: '100%',
  height: '16.25rem',
  objectFit: 'cover',
  objectPosition: 'center',
});

export const Filter = css({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '8.75rem',
  background: 'linear-gradient(0deg, rgba(28, 28, 30, 0.80) 0%, rgba(28, 28, 30, 0.00) 100%)',
  zIndex: 1,
  pointerEvents: 'none',
});

export const ContentInfo = css({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  p: '0rem 1.875rem 1.5rem 1.875rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  zIndex: 2,
  pointerEvents: 'none',
});

export const Fraction = css({
  display: 'flex',
  gap: '0.3rem',
  alignItems: 'center',
  flexShrink: 0,
  fontSize: '0.875rem',
  lineHeight: 1.2,
  color: '54',
  fontWeight: 400,
  '& > span:first-child': {
    color: '100',
    fontWeight: 600,
  },
});

export const Content = css({
  display: 'flex',
  flexDir: 'column',
  gap: '0.375rem',
  alignItems: 'flex-start',
});

export const Title = css({
  color: '100',
  fontSize: '1.125rem',
  fontWeight: 600,
  lineHeight: 1.2,
});

export const DescriptionWrapper = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.375rem',
  color: '80',
  fontSize: '0.875rem',
  fontWeight: 400,
  lineHeight: 1.2,
});

export const Dot = css({
  w: '0.125rem',
  h: '0.125rem',
  bgColor: '80',
  rounded: 'full',
});
