import { css, cva } from '@styled-system/css';

export const Container = css({
  position: 'absolute',
  bottom: '0',
  left: '0',
  right: '0',
  height: 'DETAIL_PAGE_NAVIGATOR_HEIGHT',
  display: 'flex',
  gap: '0.87rem',
  px: '1rem',
  pt: '0.625rem',
  bg: 'linear-gradient(180deg, rgba(28, 28, 30, 0.00) 0%, #1C1C1E 8.82%)',
  roundedTop: '0.625rem',
});

export const ChatButton = cva({
  base: {
    flexShrink: 0,
    height: '3.125rem',
  },
  variants: {
    isMine: {
      true: {
        width: 'full',
      },
      false: {
        width: '3.125rem',
      },
    },
  },
});

export const PickButtonContainer = css({
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  gap: '0.87rem',
  height: '3.125rem',
});

export const PickButton = cva({
  base: {
    flexGrow: 1,
    flexBasis: 0,
    flexDir: 'column',
    gap: '0.25rem',
    height: 'full',
    overflow: 'hidden',
    rounded: '0.375rem',
    '& > span': {
      color: '80',
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 'normal',
      letterSpacing: '-0.04rem',
    },
    '& > p': {
      color: '100',
      fontSize: '0.75rem',
      fontWeight: 600,
      lineHeight: 'normal',
      letterSpacing: '-0.03rem',
    },
  },
  variants: {
    color: {
      red: {
        bgColor: 'main',
      },
      blue: {
        bgColor: '#3978FF',
      },
    },
  },
});
