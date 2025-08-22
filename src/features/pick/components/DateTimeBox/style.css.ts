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

export const ButtonItem = css({
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
});
