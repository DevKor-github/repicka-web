import { css } from '@styled-system/css';

export const stepBtn = css({
  display: 'flex',
  justifyContent: 'space-evenly',
  gap: '1rem',
  padding: '0rem 1rem 2.625rem 1rem',
});

export const entireLayout = css({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
});

export const innerPage = css({
  flex: 1,
  overflowY: 'auto',
});

export const Container = css({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  height: '4.44rem',
});

export const closeBtn = css({
  position: 'absolute',
  left: '1rem',
  cursor: 'pointer',
  width: '1.25rem',
  color: '80',
  flexShrink: '1',
  aspectRatio: '1/1',
  fontSize: '1.25rem',
});

export const headerText = css({
  flex: '1',
  textAlign: 'center',
  fontSize: '1.25rem',
  fontWeight: '600',
});
