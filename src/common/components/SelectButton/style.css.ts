import { cva } from '@styled-system/css';

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
  },
  variants: {
    color: {
      main: {
        border: '1px solid',
        borderColor: 'main-54',
        bgColor: 'main-26',
      },
      gray: {
        bgColor: 'systemGray5',
      },
    },
  },
});

export const Icon = cva({
  base: {
    color: '54',
  },
  variants: {
    direction: {
      up: {
        transform: 'rotate(180deg)',
      },
      down: {
        transform: 'rotate(0deg)',
      },
    },
  },
});
