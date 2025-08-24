import { css } from '@styled-system/css';

export const Header = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  p: '1.25rem 1rem',
  position: 'relative',
  height: 'HEADER_HEIGHT',
  fontSize: '1.25rem',
  fontWeight: 600,
  flexShrink: 0,
  '& button': {
    position: 'absolute',
    left: '1.25rem',
    top: '50%',
    transform: 'translateY(-50%)',
  },
});
export const Wrapper = css({
  display: 'flex',
  flexDir: 'column',
  height: 'full',
});
export const Container = css({
  flexGrow: 1,
  p: '1rem',
  pt: '1.94rem',
  display: 'flex',
  flexDir: 'column',
  gap: '2rem',
  overflowY: 'auto',
});

export const ItemContainer = css({
  p: '0.5625rem 0.9375rem',
  rounded: '0.375rem',
  bgColor: 'systemGray5',
});

export const SaveButtonContainer = css({
  flexShrink: 0,
  p: '0.625rem 1rem 2.625rem 1rem',
  bgColor: 'systemGray6',
});
