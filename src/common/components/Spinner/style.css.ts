import { css } from '@styled-system/css';

// TODO: 스타일 변경
export const SpinnerContainer = css({
  display: 'flex',
  alignSelf: 'center',
  width: '40px',
  height: '40px',
  border: '4px solid #f3f3f3',
  borderTop: '4px solid {colors.red.2}',
  borderRadius: '50%',
  animation: 'spin 0.5s linear infinite',
});
