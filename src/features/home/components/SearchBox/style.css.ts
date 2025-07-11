import { css } from '@styled-system/css';

export const Container = css({
  display: 'flex',
  w: 'full',
  gap: '0.56rem',
  alignItems: 'center',
  pt: '1.06rem',
  pb: '1.25rem',
  px: '0.94rem',
});

export const BackButton = css({
  color: 'systemGray',
  fontSize: '2.25rem',
  flexShrink: 0,
});

export const SearchArea = css({
  display: 'flex',
  flex: '1 0 0',
  bgColor: 'systemGray4',
  rounded: '0.375rem',
  height: '2.75rem',
  p: '0.5rem 0.875rem',
  alignItems: 'center',
  gap: '0.62rem',
});

export const SearchIcon = css({
  fontSize: '1.25rem',
  flexShrink: 0,
  color: '54',
});
export const SearchInput = css({
  appearance: 'none',
  outline: 'none',
  flexGrow: 1,
  color: '100',
  fontSize: '0.875rem',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '-0.035rem',
});
