import { css, cva } from '@styled-system/css';

export const Container = css({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 'navigator', // Token으로 정의해뒀삽니다. 루트의 panda.config.ts 참고. 이거 덮고 싶으면 더 위에 컴포넌트 만들면 됨
  width: 'full', // 100%라는 뜻 (Panda CSS에서만 쓰이는 키워드임)
  display: 'flex',
  flexDir: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.875rem 1.875rem 2.125rem 1.875rem',
  bgColor: 'systemGray6',
  boxShadow: '0px -2px 4px 0px rgba(255, 255, 255, 0.05)',
  roundedTop: '10px',
});

export const Menu = cva({
  base: {
    display: 'flex',
    flexDir: 'column',
    width: '3.125rem',
    alignItems: 'center',
    gap: '0.375rem',
    flexShrink: 0,
    textAlign: 'center',
    fontSize: '0.875rem',
    lineHeight: 'normal',
    letterSpacing: '-0.0175rem',
    cursor: 'pointer',
    '& p': {
      lineClamp: 1,
      whiteSpace: 'nowrap',
    },
  },
  variants: {
    selected: {
      true: {
        fontWeight: 600,
        color: '100',
      },
      false: {
        fontWeight: 400,
        color: '54',
      },
    },
  },
  defaultVariants: {
    selected: false,
  },
});
