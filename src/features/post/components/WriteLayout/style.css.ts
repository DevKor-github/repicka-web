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
  height: '100%',
});

export const innerPage = css({
  flex: 1,
  overflowY: 'auto',
  padding: '2.34rem 1rem 0.59656rem 1rem',
});

export const Navigator = css({
  p: '0.59656rem 0 0 0',
});

export const Container = css({
  display: 'flex',
  alignItems: 'flex-end',
  position: 'relative',
  height: 'HEADER_HEIGHT',
  p: '0rem 1.25rem 0.875rem 1rem',
  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
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

export const halfFlex = css({
  flex: '1 1 0',
});
