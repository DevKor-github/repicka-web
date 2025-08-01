import { css } from '@styled-system/css';

export const Container = css({
  width: '100%',
  height: '100%',
  display: 'relative',
});

export const ScrollContainer = css({
  width: 'full',
  height: 'calc(100% - {sizes.DETAIL_PAGE_NAVIGATOR_HEIGHT})',
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
