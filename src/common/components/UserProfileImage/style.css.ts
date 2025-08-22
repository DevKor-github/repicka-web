import { css } from '@styled-system/css';

export const ProfileImage = css({
  w: '2.625rem',
  h: '2.625rem',
  rounded: 'full',
  aspectRatio: '1/1',
  bgColor: 'systemGray',
  display: 'flex',
  flexShrink: 0,
  objectFit: 'cover',
});

export const MyProfileEditImage = css({
  borderRadius: 'full',
  display: 'block',
  w: '7.5rem',
  h: '7.5rem',
  flexShrink: 0,
  aspectRatio: '1/1',
  bg: 'systemGray4',
  objectFit: 'cover',
});
