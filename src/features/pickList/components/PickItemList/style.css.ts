import { css, cva } from '@styled-system/css';

export const TradeInfo = css({
  display: 'flex',
  flexDir: 'column',
  gap: '0.625rem',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
  flex: 1,
});

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
  justifyContent: 'space-between',
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
  justifyContent: 'flex-end',
  width: 'full',
  gap: '0.25rem',
});

export const Btn = cva({
  base: {
    display: 'flex',
    padding: '0.25rem 0.375rem',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0.375rem',

    borderRadius: '0.375rem',
    bg: 'systemGray2',

    color: '100',
    fontFamily: 'Pretendard',
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
    letterSpacing: '-0.03rem',
  },
  variants: {
    bg: {
      main: {
        bg: 'main',
      },
      systemGray2: {
        bg: 'systemGray2',
      },
      systemGray5: {
        bg: 'systemGray5',
      },
    },
  },
});

export const Icon = css({
  fontSize: '1rem',
  color: '54',
});

export const Border = css({
  w: '100%',
  borderBottomWidth: '0.5px',
  borderColor: '#2C2C2E',
  borderStyle: 'solid',
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
