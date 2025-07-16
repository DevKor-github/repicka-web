import { css, cva } from '@styled-system/css';

export const Container = css({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.9375rem',
  alignItems: 'stretch',
  px: '1rem',
});

export const Wrapper = css({
  display: 'flex',
  flexDir: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const UserInfo = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.875rem',
  maxWidth: '85%',
});

export const ProfileImage = css({
  w: '2.625rem',
  h: '2.625rem',
  rounded: 'full',
  aspectRatio: '1/1',
  bgColor: 'systemGray',
});

export const UserInfoText = cva({
  base: {
    display: 'flex',
    flexDir: 'column',
    height: '2.5rem',
    width: 'full',
    overflow: 'hidden',
    alignItems: 'flex-start',
    my: '0.06rem',
    '& > p': {
      w: 'full',
      color: '100',
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: '-0.04rem',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      lineClamp: 1,
    },
  },
  variants: {
    isVerified: {
      true: {
        justifyContent: 'space-between',
      },
      false: {
        justifyContent: 'center',
      },
    },
  },
});

export const LikeButton = cva({
  base: {
    cursor: 'pointer',
    fontSize: '2.25rem',
    transition: 'all 0.2s ease-in-out',
  },
  variants: {
    isLiked: {
      true: {
        color: 'main',
      },
      false: {
        color: 'systemGray',
      },
    },
  },
});

export const Line = css({
  height: '0.5px',
  width: 'full',
  bgColor: 'systemGray4',
});
