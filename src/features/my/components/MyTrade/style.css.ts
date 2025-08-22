import { css } from '@styled-system/css';

export const MyTrade = css({
  bg: 'systemGray5',
  borderRadius: '1rem',

  display: 'flex',
  flex: 1,
  flexDir: 'column',
  padding: '1.25rem 1.125rem',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '1.25rem',
});

export const Title = css({
  color: '100',
  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
  letterSpacing: '-0.04rem',
});

export const Menu = css({
  display: 'flex',
  flexDir: 'column',
  gap: '0.875rem',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  alignSelf: 'stretch',

  color: '100',
  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
  letterSpacing: '-0.04rem',
});

export const GoMenu = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  alignSelf: 'stretch',
});

export const MenuContent = css({
  display: 'flex',
  gap: '0.5rem',
  '& span': {
    fontSize: '1.25rem',
    color: '80',
  },
});

export const Icon = css({
  flexShrink: 0,
  color: '80',
  fontSize: '1.5rem',
});
