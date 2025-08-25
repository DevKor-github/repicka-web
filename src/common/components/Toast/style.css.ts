import { css } from '@styled-system/css';

export const ToastLayout = css({
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translate3d(-50%,0,0)',
  display: 'flex',
  justifyContent: 'center',
  zIndex: 'toast',
});

export const ToastContainer = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1.25rem',

  width: 'fit-content',
  maxW: '20rem',
  borderRadius: '6.25rem',
  padding: '0.75rem 2rem',

  background: 'systemGray4',
  backdropFilter: 'blur(4px)',

  color: '100',
  fontSize: '0.875rem',
  letterSpacing: '-0.035rem',
  lineHeight: '1.4',
  fontWeight: 400,
  whiteSpace: 'nowrap',
});
