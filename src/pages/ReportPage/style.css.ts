import { css } from '@styled-system/css';

export const Wrapper = css({
  p: '2.8rem 1rem 3.75rem 1rem',
  display: 'flex',
  flex: 1,
  flexDir: 'column',
  gap: '2.5rem',
  height: 'calc(100% - {sizes.NAVIGATOR_HEIGHT} - {sizes.HEADER_HEIGHT})',
});

export const Title = css({
  color: '100',
  fontFamily: ' Pretendard',
  fontSize: '1.25rem',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
  letterSpacing: '-0.05rem',
});

export const Content = css({
  display: 'flex',
  flex: 1,
  flexDir: 'column',
  gap: '1rem',
});

export const SubTitle = css({
  display: 'flex',
  justifyContent: 'space-between',

  color: '100',
  fontFamily: ' Pretendard',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '-0.04rem',
});

export const CheckBoxContainer = css({
  w: '1.5rem',
  h: '1.5rem',
  p: '0.2rem 0.19rem 0.17rem 0.19rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const CheckBox = css({
  w: '1.125rem',
  h: '1.125rem',
  flexShrink: 0,
  aspectRatio: '1/1',
  borderRadius: '0.125rem',
  border: '2.5px solid var(--20, rgba(255, 255, 255, 0.20))',
});

export const Icon = css({
  w: '1.5rem',
  h: '1.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.5rem',
  color: '80',
  flexShrink: 0,
});

export const Btn = css({
  p: '0 1rem',
});
