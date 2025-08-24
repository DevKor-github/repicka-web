import { css, cva } from '@styled-system/css';

export const Wrapper = css({
  flex: 1,
  overflowY: 'auto',
  height: 'calc(100% - {sizes.NAVIGATOR_HEIGHT} - {sizes.HEADER_HEIGHT} - 38px)',
});

export const Section = css({
  p: '0.75rem 0 0rem 1.25rem',
  display: 'flex',
  gap: '1rem',
  borderBottomWidth: '0.5px',
  borderColor: '#2C2C2E',
  borderStyle: 'solid',
});

export const Type = cva({
  base: {
    display: 'flex',
    flexDir: 'column',
    gap: '0.69rem',
    textAlign: 'center',
    fontFamily: ' Pretendard',
    fontSize: '1.125rem',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: '-0.045rem',
  },
  variants: {
    active: {
      true: {
        color: '100',
        fontWeight: 700,
      },
      false: {
        color: 'systemGray',
        fontWeight: 400,
      },
    },
  },
});

export const Underline = css({
  height: '2px',
  width: '100%',
  background: '100',
});

export const Content = cva({
  base: {
    display: 'flex',
    flexDir: 'column',
    gap: '1rem',
    p: '1rem',
  },
  variants: {
    isEmpty: {
      true: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      },
    },
  },
});

// export const Container = cva({
//   base: {
//     display: 'flex',
//     flexDir: 'column',
//     gap: '1rem',
//   },
//   variants: {
//     isEmpty: {
//       true: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100%',
//       },
//     },
//   },
// });
