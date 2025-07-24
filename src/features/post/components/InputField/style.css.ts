import { css, cva } from '@styled-system/css';

export const Container = cva({
  base: {
    height: '2.75rem',
    backgroundColor: 'systemGray5',
    padding: '0rem 1rem',
    borderRadius: '0.375rem',
    color: '100',
    fontFamily: 'Pretendard',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '1.4',
  },
  variants: {
    isNumber: {
      true: {
        textAlign: 'end',
      },
      false: {
        textAlign: 'start',
      },
    },
  },
});

export const ContainerWithPlaceholder = css({
  _placeholder: {
    color: '54',
  },
});
