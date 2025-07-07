import { cva } from '@styled-system/css';

export const Container = cva({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '0.99019rem',
    height: '0.99019rem',
    borderRadius: 'full',
    color: '80',
    fontSize: '0.75rem',
    padding: '0.05rem 0.05rem 0 0',
    cursor: 'pointer',
  },
  variants: {
    isSelected: {
      true: {
        backgroundColor: 'main',
      },
      false: {
        backgroundColor: 'systemGray5',
      },
    },
  },
});
