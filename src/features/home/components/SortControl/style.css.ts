import { css } from '@styled-system/css';

export const Container = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
  color: '100',
  fontSize: '0.75rem',
  fontWeight: 500,
  lineHeight: '0.87788rem',
});

export const Icon = css({
  fontSize: '0.875rem',
  color: '54',
});

export const ButtonWrapper = css({
  display: 'flex',
  flexDir: 'column',
  width: 'full',
  px: '1rem',
  pt: '1.90238rem',
  gap: '0.625rem',
  alignItems: 'stretch',
});

export const Button = css({
  borderRadius: '0.5rem',
  bg: 'systemGray5',
  height: '3.125rem',
  display: 'flex',
  p: '0.8125rem 0.9375rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '100',
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: 'normal',
  letterSpacing: '-0.04rem',
  '& span': {
    fontSize: '1.25rem',
    color: '80',
  },
});
