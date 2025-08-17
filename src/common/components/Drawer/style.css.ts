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
  pos: 'absolute',
  top: '100%',
  left: 0,
  w: 'full',
  h: '100%',
  bgColor: 'systemGray6',
  roundedTop: '10px',
  willChange: 'transform',
  zIndex: 'drawerBody',
  display: 'flex',
  flexDir: 'column',
  borderTop: '1px solid {colors.systemGray4}',
  boxShadow: '0px 0px 30px 0px rgba(0, 0, 0, 0.25)',
});

export const Wrapper = css({
  w: 'full',
  pt: '1.5rem',
  pb: '2.625rem',
});

export const Header = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  px: '1rem',
});

export const HeaderTitle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.625rem',
  lineHeight: 'normal',
});

export const Title = css({
  color: '100',
  fontSize: '1rem',
  fontWeight: 500,
  letterSpacing: '-0.04rem',
});

export const Description = css({
  color: '54',
  fontSize: '0.875rem',
  fontWeight: 400,
  letterSpacing: '-0.035rem',
});

export const CloseButton = css({
  fontSize: '1rem',
  color: '80',
  cursor: 'pointer',
});

export const Content = css({ w: 'full', h: 'fit-content' });
