import { css } from '@styled-system/css';

export const Wrapper = css({
  flex: 1,
  p: '1rem',
  display: 'flex',
  flexDir: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const EditImage = css({
  position: 'relative',
  display: 'inline-block',
  m: '3.44rem 0 3.13rem 0',
});

export const SelectPhoto = css({
  position: 'absolute',
  bottom: 0,
  right: 0,
  display: 'flex',

  padding: '0.375rem',
  alignItems: 'center',
  justifyContent: 'center',
  w: '1.75rem',
  h: '1.75rem',

  rounded: 'full',
  border: '1px solid var(--systemGray5, #2C2C2E)',
  bg: 'systemGray6',

  fontSize: '1rem',
  color: 'systemGray',
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
    fontWeight: 600,
    lineHeight: 'normal',
    letterSpacing: '-0.04rem',
  },
});
