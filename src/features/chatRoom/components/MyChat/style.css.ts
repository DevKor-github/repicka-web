import { css } from '@styled-system/css';

export const Container = css({
  display: 'inline-flex',
  alignItems: 'flex-end',
  alignSelf: 'flex-end',
  gap: '0.5rem',
  maxW: 'CHAT_MAX_WIDTH',
});

export const Info = css({
  display: 'flex',
  flexDir: 'column',
  alignItems: 'flex-end',
  gap: '0.12rem',

  '& p': {
    color: '80',
  },
  '& span': {
    color: 'systemGray2',
  },
  color: 'systemGray2',
  fontFamily: 'Pretendard',
  fontSize: '0.625rem',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
  textWrap: 'nowrap',
});

export const Message = css({
  w: 'fit-content',
  display: 'flex',
  padding: '0.625rem 0.75rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.625rem',
  backgroundColor: 'main',
  borderRadius: '0.625rem 0rem 0.625rem 0.625rem',
  color: 'white',
  fontFamily: 'Pretendard',
  fontSize: '0.875rem',
  fontWeight: '400',
  lineHeight: '1.4',
  letterSpacing: '-0.035rem',
  wordBreak: 'break-word',
  whiteSpace: 'pre-wrap',
});
