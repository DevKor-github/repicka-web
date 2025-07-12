import { css } from '@styled-system/css';

export const BackLayerStyle = css({
  pos: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  bg: '#0000007D',
  zIndex: 'drawerBackLayer',
});

export const Container = css({
  pos: 'fixed',
  top: '100dvh',
  left: 0,
  w: 'full',
  h: '100dvh',
  bgColor: 'systemGray6',
  roundedTop: '10px',
  willChange: 'transform',
  zIndex: 'drawerBody',
  display: 'flex',
  flexDir: 'column',
  borderTop: '1px solid {colors.systemGray4}',
  boxShadow: '0px 0px 30px 0px rgba(0, 0, 0, 0.25)',
});

export const Handler = css({
  bgColor: '#9A9A9A',
  rounded: 'full',
  height: '4px',
  width: '3rem',
  alignSelf: 'center',
  mt: '0.875rem',
});

export const Content = css({ w: 'full', h: 'fit-content' });
