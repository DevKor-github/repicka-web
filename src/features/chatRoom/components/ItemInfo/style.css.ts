import { css, cva } from '@styled-system/css';

export const Container = css({
  position: 'absolute',
  display: 'flex',
  alignSelf: 'center',
  top: 'calc({sizes.HEADER_HEIGHT} + 0.375rem)',

  width: '100%',
  padding: '0.625rem 1rem',
  alignItems: 'center',
  bg: 'systemGray5',
  borderRadius: '0.625rem',
});

export const Deleted = cva({
  base: {
    display: 'flex',
    flex: 1,
    gap: '0.625rem',
  },
  variants: {
    isDeleted: {
      true: { opacity: 0.3 },
    },
  },
});

export const Thumbnail = css({
  w: '3.4375rem',
  h: '3.4375rem',
  flexShrink: 0,
  aspectRatio: 1 / 1,
  borderRadius: '0.78125rem',
  objectFit: 'cover',
});

export const Info = css({
  color: '100',
  fontFamily: 'Pretendard',
  fontSize: '0.875rem',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
  letterSpacing: '-0.035rem',

  display: 'flex',
  padding: '0.25rem 0',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: ' flex-start',
  flex: '1 0 0',
  alignSelf: 'stretch',
  '& span': {
    lineClamp: 1,
  },
});

export const PriceContainer = css({
  display: 'flex',
  gap: '0.625rem',
});

export const Price = css({
  display: 'flex',
  gap: '0.25rem',
  alignItems: 'center',
  alignSelf: 'stretch',

  '& span': {
    color: '54',
    fontFamily: 'Pretendard',
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
    letterSpacing: '-0.03rem',
  },
  '& p': {
    color: '100',
    fontFamily: 'Pretendard',
    fontSize: '0.875rem',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    letterSpacing: '-0.035rem',
  },
});

export const Icon = css({
  fontSize: '1.625rem',
  flexShrink: 0,
  color: 'systemGray',
});
