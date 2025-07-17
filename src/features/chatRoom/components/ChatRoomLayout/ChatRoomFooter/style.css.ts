import { css } from '@styled-system/css';

export const Container = css({
  h: 'CHAT_ROOM_FOOTER_HEIGHT',
  display: 'flex',
  padding: '0rem 1rem 0rem 1rem',
  justifyContent: 'space-between',
  alignItems: 'start',
  gap: '1rem',
});

export const Icon = css({
  display: 'flex',
  padding: '0.375rem',
  flexDir: 'column',
  alignItems: 'flex-start',
  gap: '0.625rem',
  color: '80',
  fontSize: '1.25rem',
});
