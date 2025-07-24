import { css, cva } from '@styled-system/css';

export const Container = css({
  mt: '1.3125rem',
  gap: '1.3125rem',
});

export const Wrapper = css({
  width: 'full',
  height: '22.9375rem',
  display: 'flex',
  flexDir: 'column',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  px: '1rem',
});

export const ViewButton = css({
  height: '3.125rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  rounded: '0.375rem',
  bgColor: 'main',
  color: '100',
  fontSize: '1.25rem',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '-0.05rem',
});

export const NavigatorContainer = css({
  display: 'flex',
  px: '1rem',
  width: 'full',
  height: '1.6038rem',
  borderBottom: '1px solid {colors.systemGray4}',
  alignItems: 'center',
  justifyContent: 'space-between',
  pb: '0.4375rem',
});

export const NavigatorButton = cva({
  base: {
    fontSize: '0.875rem',
    lineHeight: 'normal',
    letterSpacing: '-0.035rem',
    position: 'relative',
    transition: 'all 0.3s ease-in-out',
  },
  variants: {
    active: {
      true: {
        color: '100',
        fontWeight: 600,
      },
      false: {
        color: '80',
        fontWeight: 400,
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});

export const Underline = css({
  position: 'absolute',
  left: 0,
  right: 0,
  height: '2px',
  bgColor: '80',
  bottom: '-0.4375rem',
});
