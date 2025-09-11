import { css } from '@styled-system/css';

export const Container = css({
  display: 'flex',
  flex: 1,
  position: 'absolute',
  padding: '0.875rem',
  w: '90%',

  left: '50%',
  alignItems: 'flex-start',
  gap: '0.625rem',

  borderRadius: '0.625rem',
  background: '100',
  boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.10)',
  opacity: 0.84,
});

export const Content = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  flex: '1 0 0',
});

export const Title = css({
  color: 'black',
  fontFamily: 'Pretendard',
  fontSize: '0.75rem',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
});

export const Disc = css({
  color: 'black',
  fontFamily: 'Pretendard',
  fontSize: '0.75rem',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
});
