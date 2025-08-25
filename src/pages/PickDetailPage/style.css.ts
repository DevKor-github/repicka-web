import { css, cva } from '@styled-system/css';

export const Wrapper = css({
  display: 'flex',
  flexDir: 'column',
  height: 'full',
});

export const Container = css({
  display: 'flex',
  flexDir: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.875rem',
  px: '1rem',
  flex: '1 0 0',
});

export const Contents = css({
  display: 'flex',
  flexDir: 'column',
  gap: '1.25rem',
  alignItems: 'center',
  width: '100%',
});

export const InfoText = css({
  fontSize: '1rem',
  fontWeight: 600,
  lineHeight: 'normal',
  letterSpacing: '-0.04rem',
  color: '100',
});

export const PickInfo = css({
  display: 'flex',
  flexDir: 'column',
  gap: '0.5rem',
  alignItems: 'stretch',
  width: '100%',
});

export const EditButton = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  fontSize: '1rem',
  fontWeight: 600,
  color: '100',
  letterSpacing: '-0.04rem',
  '& span': {
    fontSize: '1.5rem',
  },
});

export const Block = css({
  display: 'flex',
  flexDir: 'column',
  gap: '0.5rem',
  p: '0.875rem 1.0625rem',
  borderRadius: '0.375rem',
  bgColor: 'systemGray5',
});

export const Item = cva({
  base: {
    display: 'flex',
    gap: '2.875rem',
    alignItems: 'center',
    fontSize: '0.875rem',
    fontWeight: 400,
    letterSpacing: '-0.035rem',
    lineHeight: 'normal',
    color: '80',
    '& label': {
      color: '100',
      flexShrink: 0,
      width: '3.125rem',
    },
    '& p': {
      flexGrow: 1,
      flexShrink: 0,
    },
  },
  variants: {
    bold: {
      true: {
        '& p': {
          fontWeight: 600,
        },
      },
    },
  },
});

export const ItemBlock = css({
  p: '0.5625rem 0.9375rem',
  flexShrink: 0,
  rounded: '0.375rem',
  bgColor: 'systemGray5',
});
