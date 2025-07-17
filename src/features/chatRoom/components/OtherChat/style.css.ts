import { css } from '@styled-system/css';

export const Container = css({
  alignSelf: 'flex-start',
  w: 'fit-content',
  maxW: 'CHAT_MAX_WIDTH',
  display: 'flex',
  padding: '0.625rem 0.75rem',
  gap: '0.625rem',
  backgroundColor: 'systemGray4',
  borderRadius: '0rem 0.625rem 0.625rem 0.625rem',
  color: '80',
  fontFamily: 'Pretendard',
  fontSize: '0.875rem',
  fontWeight: '400',
  lineHeight: '1.4',
  letterSpacing: '-0.035rem',
  wordBreak: 'break-word',
  whiteSpace: 'pre-wrap',
});
