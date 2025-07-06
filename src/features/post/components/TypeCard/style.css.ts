import { css, cva } from '@styled-system/css';

export const IconContainer = css({
  display: 'flex',
  flex: '1',
  width: '100%',
  justifyContent: 'flex-end',
});

export const Icon = cva({
  base: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: '1.52225rem',
    height: '1.52225rem',
    padding: '0.125rem',
    borderRadius: '0.76113rem',
    transition: 'all 0.3s ease-in-out',
  },
  variants: {
    isSelected: {
      true: {
        backgroundColor: 'main',
        color: '80',
      },
      false: {
        backgroundColor: 'systemGray3',
        color: '54',
      },
    },
  },
});

export const CardContainer = cva({
  base: {
    cursor: 'pointer',
    padding: '0.88rem 0.63rem 1.4rem 0.63rem',
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 0',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: '0.63rem',
    border: '1px solid',
    fontSize: '1.125rem',
    textAlign: 'center',
    lineHeight: 1.4,
    letterSpacing: '-0.045rem',
    gap: '0.88rem',
    transition: 'all 0.3s ease-in-out',
  },
  variants: {
    isSelected: {
      true: {
        backgroundColor: 'main-26',
        borderColor: 'main-54',
        fontWeight: 600,
      },
      false: {
        backgroundColor: 'systemGray5',
        borderColor: 'systemGray5',
        fontWeight: 400,
        color: '80',
      },
    },
  },
});
