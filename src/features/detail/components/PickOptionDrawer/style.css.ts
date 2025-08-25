import { css, cva } from '@styled-system/css';

export const DrawerContainer = css({
  pt: '3.75rem',
  px: '1rem',
  pb: '4.875rem',
  display: 'flex',
  gap: '0.625rem',
});

export const SelectButton = cva({
  base: {
    flex: '1 0 0',
    height: '5.25rem',
    padding: '0.75rem 0.875rem',
    display: 'flex',
    flexDir: 'column',
    gap: '0.25rem',
    rounded: '0.375rem',
    border: '1px solid',
    alignItems: 'flex-start',
    '& span': {
      fontSize: '1.125rem',
      fontWeight: 500,
      letterSpacing: '-0.045rem',
      lineHeight: 'normal',
    },
    '& div': {
      fontSize: '0.75rem',
      fontWeight: 400,
      letterSpacing: '-0.03rem',
      textAlign: 'left',
      lineHeight: 'normal',
      wordBreak: 'keep-all',
      display: 'flex',
      alignItems: 'center',
      gap: '0.125rem',
      '& div': {
        color: 'systemGray2',
        fontSize: '0.875rem',
      },
    },
  },
  variants: {
    isActive: {
      true: {
        bgColor: 'systemGray4',
        borderColor: 'systemGray4',
        '& span': {
          color: '100',
        },
        '& p': {
          color: '80',
        },
      },
      false: {
        bgColor: 'systemGray6',
        borderColor: 'systemGray5',
        '& span': {
          color: '54',
        },
        '& p': {
          color: '20',
        },
      },
    },
  },
});
