import { css } from '@styled-system/css';

export const Container = css({
  display: 'flex',
  p: '0.9375rem 0 0.9375rem 1rem',
  alignItems: 'center',
  height: 'HEADER_HEIGHT',
  gap: '0.875rem',
  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
});

export const UserInfo = css({
  display: 'flex',
  gap: '0.875rem',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Verifiy = css({
  display: 'flex',
  flexDir: 'column',
});

export const BackBtn = css({
  fontSize: '1.625rem',
  cursor: 'pointer',
  color: 'systemGray',
  flexShrink: '0',
  aspectRatio: '1/1',
});
