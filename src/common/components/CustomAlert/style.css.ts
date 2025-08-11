import { css } from '@styled-system/css';

export const Filter = css({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.60)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  backdropFilter: 'blur(2px)',
});

export const Container = css({
  display: 'flex',
  flexDirection: 'column',
  width: '21.875rem',
  padding: '3.125rem 1.5rem 1.25rem 1.5rem',
  alignItems: 'center',
  gap: '3.125rem',
  borderRadius: '0.625rem',
  border: '1px solid',
  borderColor: 'systemGray5',
  backgroundColor: 'systemGray6',
});

export const Text = css({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  fontFamily: 'Pretendard',
  '& span': {
    fontSize: '1rem',
    fontWeight: 600,
    color: '100',
  },
  '& p': {
    fontSize: '0.875rem',
    fontWeight: 400,
    color: '80',
  },
  fontStyle: 'normal',
  lineHeight: 'normal',
  gap: '1.25rem',
});

export const Btn = css({
  display: 'flex',
  flex: '1',
  justifyContent: 'flex-end',
  w: '100%',
  gap: '0.62rem',
});
