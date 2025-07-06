import { css, cva } from '@styled-system/css';

export const Container = css({
  display: 'flex',
  gap: '0.375rem',
  alignItems: 'center',
});

export const progressCircle = cva({
  base: {
    height: '0.375rem',
    transition: 'all 0.3s ease-in-out',
    rounded: 'full',
    boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.60)',
  },
  variants: {
    isCurrent: {
      true: {
        width: '0.875rem',
        bgColor: '100',
      },
      false: {
        width: '0.375rem',
        bgColor: '54',
      },
    },
  },
});
