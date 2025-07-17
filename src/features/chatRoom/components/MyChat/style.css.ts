import { css } from '@styled-system/css';

export const Container = css({
  alignSelf: 'flex-end',
  w: 'fit-content',
  maxW: 'CHAT_MAX_WIDTH',
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
