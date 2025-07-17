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

export const Verified = css({
  display: 'flex',
  flexDir: 'column',
  justifyContent: 'center',
});

export const VerifiedTag = css({
  padding: '0.1rem 0.275rem',
  bgColor: 'main-26',
  rounded: '3.32px',
  fontSize: '0.625rem',
  fontWeight: 400,
  lineHeight: 1.4,
  letterSpacing: '-0.025rem',
  color: 'main',
  display: 'flex',
  alignItems: 'center',
  gap: '0.22rem',
  '& > p': {
    color: '100',
  },
});

export const ProfileCircle = css({
  width: '2.625rem',
  height: '2.625rem',
  borderRadius: 'full',
  backgroundColor: 'systemGray',
});

export const BackBtn = css({
  fontSize: '1.625rem',
  cursor: 'pointer',
  color: 'systemGray',
  flexShrink: '0',
  aspectRatio: '1/1',
});
