import { css } from '@styled-system/css';

export const Container = css({
  display: 'flex',
  flexDir: 'column',
  gap: '1rem',
});

export const TopContainer = css({
  display: 'flex',
  px: '1.25rem',
  h: '1.4375rem',
  w: 'full',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const TopRightControl = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
});

export const ResultBar = css({
  display: 'flex',
  gap: '0.25rem',
  alignItems: 'center',
  color: '100',
  fontSize: '0.875rem',
  fontWeight: 500,
  lineHeight: 1.4,
  letterSpacing: '-0.0255rem',
});

export const ResultCount = css({
  fontSize: '0.75rem',
  fontWeight: 400,
});

export const SelectButtonContainer = css({
  mx: '1rem',
  position: 'relative',
});

export const ButtonWrapper = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.375rem',
  overflowX: 'auto',
  pr: '1.75rem',
});

export const LeftGradient = css({
  position: 'absolute',
  height: '100%',
  bg: 'linear-gradient(270deg, #1C1C1E -2.47%, rgba(28, 28, 30, 0.00) 100%)',
  width: '8.75rem',
  flexShrink: 0,
  right: '-0.1rem',
  top: 0,
  pointerEvents: 'none',
});

export const FilterButton = css({
  position: 'absolute',
  top: 0,
  right: 0,
  height: '100%',
  bgColor: 'systemGray4',
  rounded: 'full',
  zIndex: 10,
  flexShrink: 0,
  p: '0.25rem 0.375rem',
  fontSize: '1.25rem',
  width: '2rem',
  color: '100',
});
