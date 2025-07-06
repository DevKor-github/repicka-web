import { css } from '@styled-system/css';

export const Container = css({
  width: '100%',
  position: 'relative',
});

export const Image = css({
  width: '100%',
  height: '24.375rem',
  objectFit: 'cover',
  objectPosition: 'center',
});

export const StepIndicator = css({
  position: 'absolute',
  bottom: '0.94rem',
  zIndex: 5,
  pointerEvents: 'none',
  left: '50%',
  transform: 'translate3d(-50%, 0, 0)',
});
