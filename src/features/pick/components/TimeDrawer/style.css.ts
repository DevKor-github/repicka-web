import { css, cva } from '@styled-system/css';

export const Container = css({
  display: 'flex',
  pt: '5.625rem',
  gap: '5.625rem',
  flexDir: 'column',
  px: '1rem',
});

export const TimePickerWrapper = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& label': {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 'normal',
    color: '100',
  },
});

export const ButtonWrapper = css({
  display: 'flex',
  gap: '0.625rem',
  alignItems: 'stretch',
  width: '100%',
  height: '3.125rem',
});

export const DateDrawerButton = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    rounded: '0.375rem',
    flex: '1 0 0',
    flexShrink: 0,
    fontSize: '1.25rem',
    fontWeight: 500,
    letterSpacing: '-0.05rem',
  },
  variants: {
    type: {
      prev: {
        bgColor: 'systemGray4',
        color: '54',
      },
      submit: {
        bgColor: 'main',
        color: '100',
      },
    },
  },
});
