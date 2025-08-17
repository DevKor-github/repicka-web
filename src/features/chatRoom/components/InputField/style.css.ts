import { css, cva } from '@styled-system/css';

export const Container = css({
  position: 'relative',
  backgroundColor: 'systemGray5',
  borderRadius: '0.375rem',
  paddingRight: '0.75rem',

  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1.03675rem', // 아이콘 안 겹치게
});

export const Input = css({
  display: 'flex',
  flex: 1,
  border: 'none',
  color: 'white',
  fontSize: '1rem',
  fontWeight: '500',
  lineHeight: 'normal',
  letterSpacing: '-0.04rem',
  m: '0.88rem 0rem 0.88rem 1rem',
  fontFamily: 'Pretendard',
  resize: 'none',

  _focus: {
    outline: 'none',
  },
});

export const SendIcon = cva({
  base: {
    width: '1.03675rem',
    height: '1.18588rem',
    cursor: 'pointer',
  },
  variants: {
    canSend: {
      true: {
        color: '84',
      },
      false: {
        color: '54',
      },
    },
  },
});
