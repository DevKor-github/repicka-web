import { css, cva } from '@styled-system/css';

export const Container = css({
  position: 'relative',
  height: '2.75rem',
  backgroundColor: 'systemGray5',
  padding: '0rem 1rem',
  borderRadius: '0.375rem',
  display: 'flex',
  flex: 1,
  alignItems: 'center',
});

export const Input = css({
  width: '100%',
  border: 'none',
  background: 'transparent',
  color: 'white',
  fontSize: '1rem',
  fontWeight: '500',
  lineHeight: 'normal',
  letterSpacing: '-0.04rem',
  marginRight: '1.03675rem', // 아이콘 안 겹치게
  fontFamily: 'Pretendard',
});

export const SendIcon = cva({
  base: {
    position: 'absolute',
    right: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '1.03675rem',
    height: '1.18588rem',
    cursor: 'pointer',
  },
  variants: {
    canSend: {
      true: {
        color: 'main',
      },
      false: {
        color: '80',
      },
    },
  },
});
