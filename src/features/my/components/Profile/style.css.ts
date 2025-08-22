import { css } from '@styled-system/css';

export const Profile = css({
  bg: 'systemGray5',
  borderRadius: '1rem',

  display: 'flex',
  flex: 1,
  padding: '1.25rem 1.125rem',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const UserInfo = css({
  display: 'flex',
  gap: '0.875rem',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Icon = css({
  flexShrink: 0,
  color: '80',
  fontSize: '1.5rem',
});

export const Verifiy = css({
  display: 'flex',
  flexDir: 'column',
});
