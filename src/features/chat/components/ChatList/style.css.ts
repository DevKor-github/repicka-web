import { css } from '@styled-system/css';

export const List = css({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '0.87rem',
});

export const ProfileCircle = css({
  width: '2.625rem',
  height: '2.625rem',
  borderRadius: 'full',
  backgroundColor: 'systemGray',
});

export const Contents = css({
  display: 'flex',
  flex: 1,
  flexDir: 'column',
  gap: '0.25rem',
  justifyContent: 'center',
  alignItems: 'flex-start',
  fontFamily: 'Pretendard',
  fontStyle: 'normal',
  fontSize: '1rem',
  lineHeight: 'normal',
  letterSpacing: '-0.04rem',
  '& h1': {
    color: '100',
    fontWeight: '500',
  },
  '& p': {
    color: '80',
    fontWeight: '400',
  },
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

export const UserInfo = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.375rem',
});

export const Message = css({
  display: 'flex',
  w: '100%',
  justifyContent: 'space-between',
});

export const Count = css({
  display: 'flex',
  padding: '0.0625rem 0.375rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.625rem',
  color: 'main',
  textAlign: 'center',
  fontFamily: 'Pretendard',
  fontSize: '0.75rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '1.4',
  letterSpacing: '-0.03rem',
});
