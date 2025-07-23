import { css } from '@styled-system/css';

export const Container = css({
  width: 'full',
  height: 'full',
  display: 'flex',
  flexDir: 'column',
  gap: '1.5rem',
});

export const SearchControlsContainer = css({
  flexShrink: 0,
});

export const ItemListContainer = css({
  px: '1rem',
  overflowY: 'auto',
  flexGrow: 1,
  mb: 'NAVIGATOR_HEIGHT',
  pb: '1rem',
});
