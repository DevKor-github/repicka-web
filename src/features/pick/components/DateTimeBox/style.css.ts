import { css, cva } from '@styled-system/css';

export const Container = cva({
  base: {
    display: 'flex',
    flexDir: 'column',
  },
  variants: {
    isDirect: {
      true: {
        gap: '1.25rem',
      },
      false: {
        gap: '1.75rem',
      },
    },
  },
});

export const ButtonContainer = css({
  display: 'flex',
  flexDir: 'column',
  gap: '0.625rem',
});

export const Label = css({
  color: '100',
  fontSize: '1rem',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '-0.04rem',
});

export const ButtonWrapper = css({
  display: 'flex',
  gap: '0.625rem',
  alignItems: 'center',
  width: '100%',
});

// TODO: 버튼 비활성화 만들기
export const ButtonItem = cva({
  base: {
    flex: '1 0 0',
    rounded: '0.375rem',
    border: '1px solid',
    borderColor: 'systemGray3',
    bgColor: 'systemGray5',
    height: '2.75rem',
    px: '1rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: '100',
    letterSpacing: '-0.04rem',
    fontWeight: 400,
    lineHeight: 'normal',
    '& span': {
      fontSize: '1.25rem',
    },
  },
  variants: {
    dateOnly: {
      true: {},
      false: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.625rem',
        '& button': {
          flex: '1 0 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        '& div': {
          height: '1rem',
          width: '0.0625rem',
          borderRadius: '0.625rem',
          bgColor: '20',
          flexShrink: 0,
        },
      },
    },
  },
});
