import { css } from '@styled-system/css';

export const Container = css({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  height: 'HEADER_HEIGHT',
  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
});

export const backBtn = css({
  position: 'absolute',
  left: '1rem',
  cursor: 'pointer',
  color: '80',
  flexShrink: '1',
  aspectRatio: '1/1',
  fontSize: '1.625rem',
});

export const headerText = css({
  flex: '1',
  textAlign: 'center',
  fontSize: '1.25rem',
  fontWeight: '600',
});
