import { css } from '@styled-system/css';

export const AlertText = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  color: '80',
  fontFamily: 'Pretendard',
  fontSize: '0.75rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
  letterSpacing: '-0.03rem',
});

export const Container = css({
  w: '0.75rem',
  h: '0.75rem',
  aspectRatio: '1/1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Ellipse = css({
  w: '2px',
  h: '2px',
  borderRadius: 'full',
  backgroundColor: '80',
});
