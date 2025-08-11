import { css } from '@styled-system/css';

export const Container = css({
  height: 'calc(100% - {sizes.NAVIGATOR_HEIGHT} - {sizes.HEADER_HEIGHT})',
  overflowY: 'auto',
  paddingBottom: '1rem',
  display: 'flex',
  width: 'full',
  flexDir: 'column',
  alignItems: 'stretch',
  gap: '1rem',
});

export const WriteButtonContainer = css({
  position: 'absolute',
  right: '0.99rem',
  bottom: 'calc(1.06rem + {spacing.NAVIGATOR_HEIGHT})',
});
