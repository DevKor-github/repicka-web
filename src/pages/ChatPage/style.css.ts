import { cva } from '@styled-system/css';

export const Wrapper = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1.25rem 1rem',
    gap: '2.25rem',
    overflowY: 'auto',
    height: 'calc(100% - {sizes.NAVIGATOR_HEIGHT} - {sizes.HEADER_HEIGHT})',
  },
  variants: {
    isEmpty: {
      true: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },
});
