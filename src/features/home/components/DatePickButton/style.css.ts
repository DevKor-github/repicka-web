import { css } from '@styled-system/css';

export const Container = css({
  display: 'flex',
  p: '0.25rem 0.625rem 0.25rem 0.5rem',
  alignItems: 'center',
  gap: '0.1875rem',
  rounded: '0.625rem',
  bg: 'systemGray5',
  color: '100',
  fontSize: '0.75rem',
  fontWeight: 500,
  lineHeight: '0.87788rem',
});

export const Icon = css({
  fontSize: '1rem',
});

export const DatePickerContainer = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  alignItems: 'center',
  px: '1rem',
  pt: '1.875rem',
});
