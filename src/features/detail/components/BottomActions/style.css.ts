import { css, cva } from '@styled-system/css';

export const Container = css({
  height: 'DETAIL_PAGE_NAVIGATOR_HEIGHT',
  flexShrink: 0,
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

export const AlreadyPickedButton = css({
  width: 'full',
  height: '3.125rem',
  bgColor: 'main',
  display: 'flex',
  flexDir: 'column',
  gap: '0.25rem',
  alignItems: 'center',
  rounded: '0.375rem',
  justifyContent: 'center',
  '& p': {
    color: '80',
    fontSize: '0.75rem',
    lineHeight: 'normal',
    letterSpacing: '-0.03rem',
  },
  '& div': {
    color: 'white',
    fontSize: '1rem',
    lineHeight: 'normal',
    fontWeight: 600,
    letterSpacing: '-0.04em',
  },
});
