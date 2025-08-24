import { css, cva } from '@styled-system/css';

export const Wrapper = css({
  flex: 1,
  overflowY: 'auto',
  height: 'calc(100% - {sizes.NAVIGATOR_HEIGHT} - {sizes.HEADER_HEIGHT} - 38px)',
});

export const Section = css({
  p: '0.75rem 0 0 1.25rem',
  display: 'flex',
  gap: '1rem',
});

export const Type = cva({
  base: {
    display: 'flex',
    flexDir: 'column',
    gap: '0.69rem',
  },
  variants: {
    g: {
      true: {
        color: '100',
        textAlign: 'center',
        fontFamily: ' Pretendard',
        fontSize: '1.125rem',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
        letterSpacing: '-0.045rem',
      },
    },
  },
});

export const Bar = css({
  display: 'flex',
  flex: 1,
  color: '100',
  border: '1.5px solid',
  bg: 'main',
});

export const Content = css({
  display: 'flex',
  flex: 1,
  flexDir: 'column',
  p: '1rem',
  gap: '1rem',
});
