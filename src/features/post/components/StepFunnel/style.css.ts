import { css } from '@styled-system/css';

export const Head = css({
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  fontFamily: 'Pretendard',
  fontSize: '1.25rem',
  fontWeight: 600,
  lineHeight: 1.4,
  letterSpacing: '-0.05rem',
  gap: '0.5rem',
});

export const ContentHead = css({
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'stretch',
  gap: '0.38rem',
});

export const Content = css({
  display: 'flex',
  alignItems: 'start',
  flexDirection: 'column',
  margin: '2.97rem 0 3.75rem 0',
  gap: '2.25rem',
});

export const DetailContent = css({
  display: 'flex',
  flexDirection: 'column',
  color: '100',
  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '1.4',
  letterSpacing: '-0.04rem',
  gap: '1rem',
  width: '100%',
});

export const ChipContainer = css({
  display: 'flex',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  gap: '0.5625rem 0.5rem',
  alignSelf: 'stretch',
  flexWrap: 'wrap',
});
