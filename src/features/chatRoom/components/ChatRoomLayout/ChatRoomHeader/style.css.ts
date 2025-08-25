import { css, cva } from '@styled-system/css';

export const Wrapper = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingRight: '1rem',
});

export const Container = css({
  display: 'flex',
  p: '0.9375rem 0 0.9375rem 1rem',
  alignItems: 'center',
  height: 'HEADER_HEIGHT',
  gap: '0.875rem',
  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
  flexShrink: 0,
});

export const Pick = cva({
  base: {
    display: 'flex',
    p: '0.5rem',
    alignItems: 'center',
    gap: '0.375rem',
    borderRadius: '6.25rem',
    bg: 'systemGray5',

    fontFamily: 'Pretendard',
    fontSize: '0.75rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    letterSpacing: '-0.03rem',
  },
  variants: {
    isPicked: {
      true: {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'systemGray4',
        color: 'main',
      },
      false: {
        color: '20',
      },
    },
  },
});

export const Logo = cva({
  base: {
    width: '1rem',
    aspectRatio: '1/1',
  },
  variants: {
    isPicked: {
      false: {
        opacity: 0.2,
      },
    },
  },
});

export const UserInfo = css({
  display: 'flex',
  gap: '0.875rem',
  justifyContent: 'center',
  alignItems: 'center',

  color: '100',
  fontFamily: 'Pretendard',
  fontSize: ' 1rem',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: 'normal',
  letterSpacing: '-0.04rem',
});

export const Verifiy = css({
  display: 'flex',
  flexDir: 'column',
});

export const BackBtn = css({
  fontSize: '1.625rem',
  cursor: 'pointer',
  color: 'systemGray',
  flexShrink: '0',
  aspectRatio: '1/1',
});
