import { css } from '@styled-system/css';

export const Container = css({
  position: 'relative',
  display: 'inline-block',
});

export const UploadedPhoto = css({
  width: '4.38rem',
  height: '4.38rem',
  alignItems: 'center',
  borderRadius: '0.5rem',
  backgroundColor: 'systemGray5',
  objectFit: 'cover',
});

export const CancelBtn = css({
  top: '-0.24rem',
  right: '-0.24rem',
  position: 'absolute',
  width: '1.07081rem',
  height: '1.07081rem',
  borderRadius: 'full',
  backgroundColor: 'main',
  color: 'white',
  border: 'none',
  fontSize: '0.75rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
});
