import { cva } from '@styled-system/css';

export const Chip = cva({
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
  },
  variants: {
    color: {
      main: {
        backgroundColor: 'main-26',
        border: '1px solid',
        borderColor: 'main-54',
        color: '100',
      },
      gray: {
        backgroundColor: 'systemGray5',
        color: '80',
      },
    },
  },
});
