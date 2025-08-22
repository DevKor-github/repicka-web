import { css } from '@styled-system/css';

export const Container = css({
  display: 'flex',
  flexDir: 'column',
  gap: '0.625rem',
  alignItems: 'stretch',
});

export const PlaceViewer = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '2.75rem',
  px: '1rem',
  rounded: '0.375rem',
  border: '1px solid',
  borderColor: 'systemGray3',
  bgColor: 'systemGray5',
  gap: '1rem',
});

export const PlaceViewerContent = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.625rem',
  fontSize: '1rem',
  lineHeight: 'normal',
  letterSpacing: '-0.04rem',
  flexGrow: 1,
  '& > p': {
    color: '100',
    flexShrink: 0,
  },
  '& > input': {
    width: 'full',
    flexGrow: 1,
    outline: 'none',
  },
  '& > span': {
    height: '1rem',
    width: '1px',
    bgColor: 'systemGray3',
    flexShrink: 0,
  },
});

export const PlaceViewerButton = css({
  fontSize: '1.25rem',
  color: '100',
  flexShrink: 0,
});
