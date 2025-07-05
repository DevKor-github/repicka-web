import { css } from '@styled-system/css';

export const Container = css({
  width: '100%',
  height: '100%',
  display: 'relative',
});

export const ScrollContainer = css({
  width: 'full',
  overflowY: 'auto',
});

export const ContentContainer = css({
  mt: '0.87rem',
  display: 'flex',
  alignItems: 'stretch',
  flexDirection: 'column',
  gap: '1.12rem',
});
