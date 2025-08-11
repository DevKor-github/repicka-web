import { css } from '@styled-system/css';

export const Wrapper = css({
  p: '1rem',
  flex: 1,
  display: 'flex',
  flexDir: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ProfileImage = css({
  borderRadius: 'full',
  display: 'flex',
  w: '7.5rem',
  h: '7.5rem',
  flexShrink: 0,
  aspectRatio: '1/1',
  bg: 'systemGray4',
  m: '3.44rem 0 3.13rem 0',
});

export const Content = css({
  display: 'flex',
  flexDir: 'column',
  flex: 1,
  alignSelf: 'stretch',
  gap: '0.62rem',

  '& h1': {
    color: '100',
    fontFamily: 'Pretendard',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
    letterSpacing: '-0.04rem',
  },
});
