import { css } from '@styled-system/css';

export const List = css({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '0.87rem',
});

export const Img = css({
  w: '3.5rem',
  h: '3.5rem',
  position: 'relative',
  display: 'inline-block',
});

export const Thumbnail = css({
  display: 'flex',
  position: 'absolute',
  right: 0,
  bottom: 0,
  w: '2rem',
  h: '2rem',
  bg: 'systemGray',
  flexShrink: 0,
  aspectRatio: '1/1',
  objectFit: 'cover',
  borderRadius: '0.375rem',
  border: '1px solid var(--100, #FFF)',
  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.10)',
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

export const TimeInfo = css({
  display: 'flex',
  w: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Time = css({
  display: 'flex',
  whiteSpace: 'nowrap',
  color: '54',
  textAlign: 'center',
  fontFamily: 'Pretendard',
  fontSize: '0.75rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 1.4,
  letterSpacing: '-0.03rem',
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
  gap: '0.375rem',
});

export const Message = css({
  display: 'flex',
  w: '100%',
  lineClamp: 1,
});

export const Count = css({
  display: 'flex',
  w: 'fit-content',
  h: '1.125rem',
  padding: '0.0625rem 0.375rem',
  justifyContent: 'center',
  alignItems: 'center',

  color: '100',
  backgroundColor: 'main',
  borderRadius: 'full',
  textAlign: 'center',
  fontFamily: 'Pretendard',
  fontSize: '0.75rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '1.4',
  letterSpacing: '-0.03rem',
});
