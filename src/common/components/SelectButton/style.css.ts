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
    border: '1px solid',
  },
  variants: {
    color: {
      main: {
        borderColor: 'main-54',
        bgColor: 'main-26',
      },
      gray: {
        borderColor: 'systemGray5',
        bgColor: 'systemGray5',
      },
    },
  },
});

export const Icon = cva({
  base: {
    color: '54',
    fontSize: '0.875rem',
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
