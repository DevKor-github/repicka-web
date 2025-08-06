import { css } from '@styled-system/css';

export const Container = css({
  display: 'flex',
  paddingLeft: '1rem',
  alignItems: 'center',
  height: '4.44rem',
  gap: '0.88rem',
  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
});

export const UserInfo = css({
  display: 'flex',
  gap: '0.88rem',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ProfileCircle = css({
  display: 'flex',
  width: '2.625rem',
  height: '2.625rem',
  borderRadius: 'full',
  backgroundColor: 'systemGray',
  flexShrink: 0,
});

export const BackBtn = css({
  fontSize: '1.625rem',
  cursor: 'pointer',
  color: 'systemGray',
  flexShrink: '0',
  aspectRatio: '1/1',
});
