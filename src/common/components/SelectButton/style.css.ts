import { css, cva } from '@styled-system/css';

export const Container = cva({
  base: {
    borderRadius: 'full',
    padding: '0.375rem 0.375rem 0.375rem 0.625rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.25rem',
    fontSize: '0.75rem',
    fontWeight: 500,
    cursor: 'pointer',
    color: '100',
    border: '1px solid',
    lineHeight: '0.87788rem',
    flexShrink: 0,
  },
  variants: {
    isSelected: {
      true: {
        borderColor: 'main-54',
        bgColor: 'main-26',
      },
      false: {
        borderColor: 'systemGray5',
        bgColor: 'systemGray5',
      },
    },
  },
});

export const Icon = css({
  color: '54',
  fontSize: '0.875rem',
});

export const SelectedIconContainer = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.125rem',
});

export const SelectedIcon = css({
  fontSize: '0.75rem',
  w: '0.75rem',
  h: '0.75rem',
  color: 'main',
});
