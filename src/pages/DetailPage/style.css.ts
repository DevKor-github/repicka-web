import { css } from '@styled-system/css';

export const Container = css({
  width: '100%',
  height: '100%',
  position: 'relative',
  display: 'flex',
  flexDir: 'column',
});

export const ScrollContainer = css({
  width: 'full',
  flexGrow: 1,
  overflowY: 'auto',
  paddingBottom: '1rem',
});

export const ContentContainer = css({
  mt: '0.87rem',
  display: 'flex',
  alignItems: 'stretch',
  flexDirection: 'column',
  gap: '1.12rem',
});
