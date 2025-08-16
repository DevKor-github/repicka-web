import { css } from '@styled-system/css';

export const Wrapper = css({
  // h: 'CHAT_ROOM_FOOTER_HEIGHT',
  display: 'flex',
  padding: '0.625rem 1rem 2.62rem 1rem',
  alignItems: 'flex-start',
});

export const Container = css({
  display: 'flex',
  flex: 1,
  gap: '1rem',
  alignItems: 'center',
});

export const Icon = css({
  padding: '0.375rem',
  color: '80',
  fontSize: '1.25rem',
});
