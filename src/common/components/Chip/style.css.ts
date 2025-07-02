import { cva } from '@styled-system/css';

export const Container = cva({
  base: {
    padding: '0.5rem 0.75rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.25rem',
    rounded: 'full',
    width: 'fit-content',
    fontSize: '0.875rem',
    fontWeight: 400,
    cursor: 'pointer',
    border: '1px solid',
  },
  variants: {
    color: {
      main: {
        backgroundColor: 'main-26',
        borderColor: 'main-54',
        color: '100',
      },
      gray: {
        backgroundColor: 'systemGray5',
        borderColor: 'systemGray5',
        color: '80',
      },
    },
  },
});
