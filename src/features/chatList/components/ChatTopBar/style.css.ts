import { css } from '@styled-system/css';

export const Wrapper = css({
  w: 'full',
  h: 'HEADER_HEIGHT',
  display: 'flex',
  flexDir: 'column',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  padding: '1.5rem 1rem',
  gap: '0.625rem',

  boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.25)',

  color: '100',
  textAlign: 'center',
  fontFamily: 'Pretendard',
  fontSize: '1.25rem',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
  letterSpacing: '-0.05rem',
});
