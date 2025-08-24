import { css } from '@styled-system/css';

export const Container = css({
  padding: '1rem',
  backgroundColor: 'systemGray5',
  width: '100%',
  borderRadius: '0.375rem',
  display: 'flex',
  flexDir: 'column',
  gap: '1.5rem',
});

export const InputField = css({
  w: '100%',
  h: '3.75rem',
  color: '100',
  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '1.4',
  resize: 'none',
  '&::placeholder': {
    color: '54',
  },
  _focus: {
    outline: 'none',
  },
});

export const MaxLength = css({
  display: 'flex',
  justifyContent: 'end',
  fontSize: '0.6875rem',
  fontFamily: 'Pretendard',
  color: '80',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '1.4',
  letterSpacing: '-0.0275rem',
});
