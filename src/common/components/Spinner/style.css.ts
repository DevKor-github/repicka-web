import { css } from '@styled-system/css';

export const SpinnerContainer = css({
  width: '40px',
  height: '40px',

  display: 'flex',
  borderRadius: '50%',
  alignSelf: 'center',
  border: '4px solid #f3f3f3',
  borderTop: '4px solid {colors.main}',
  animation: 'spin 0.5s linear infinite',
});
