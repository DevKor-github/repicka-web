import { css } from '@styled-system/css';

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
  gap: '0.5rem',
  alignItems: 'flex-start',
  color: '100',
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: 'normal',
  letterSpacing: '-0.04rem',
});

export const Container = css({
  display: 'flex',
  gap: '0.5rem',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Icon = css({
  color: '80',
  fontSize: '1.25rem',
  flexShrink: 0,
});

export const Reverse = css({
  transform: 'rotate(180deg)',
});
