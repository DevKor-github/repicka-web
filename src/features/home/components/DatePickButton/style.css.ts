import { css, cva } from '@styled-system/css';

export const Container = cva({
  base: {
    display: 'flex',
    p: '0.25rem 0.625rem 0.25rem 0.5rem',
    alignItems: 'center',
    gap: '0.1875rem',
    rounded: '0.625rem',
    color: '100',
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: '0.87788rem',
  },
  variants: {
    isSelected: {
      true: {
        bgColor: 'main-26',
      },
      false: {
        bgColor: 'systemGray5',
      },
    },
  },
});

export const Icon = css({
  fontSize: '1rem',
});
