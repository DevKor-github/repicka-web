import { css } from '@styled-system/css';

export const List = css({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '0.87rem',
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

export const UserInfo = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.375rem',
  width: '100%',
  '& h1': {
    lineClamp: 1,
    flexShrink: 1,
  },
});

export const MessageInfo = css({
  display: 'flex',
  w: '100%',
  alignItems: 'center',
  overflow: 'hidden',
  justifyContent: 'space-between',
});

export const Message = css({
  display: 'flex',
  w: '100%',
  lineClamp: 1,
});

export const Count = css({
  display: 'flex',
  w: '1.125rem',
  h: '1.125rem',
  padding: '0.0625rem 0.375rem',
  justifyContent: 'center',
  alignItems: 'center',

  color: 'main',
  backgroundColor: 'main-26',
  borderRadius: 'full',
  textAlign: 'center',
  fontFamily: 'Pretendard',
  fontSize: '0.75rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '1.4',
  letterSpacing: '-0.03rem',
});
