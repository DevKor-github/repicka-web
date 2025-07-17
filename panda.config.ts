import { defineConfig } from '@pandacss/dev';

const PANDA_CSS_CONSTANTS = {
  NAVIGATOR_HEIGHT: { value: '97px' },
  HOME_HEADER_HEIGHT: { value: '52px' },
  DETAIL_PAGE_NAVIGATOR_HEIGHT: { value: '6.75rem' },
  MAX_WIDTH: { value: '700px' },
  CHAT_ROOM_FOOTER_HEIGHT: { value: '81px' },
  CHAT_MAX_WIDTH: { value: '221px' },
};

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          black: { value: '#1A1A1A' },
          systemGray: { value: '#8E8E93' },
          systemGray2: { value: '#636366' },
          systemGray3: { value: '#48484A' },
          systemGray4: { value: '#3A3A3C' },
          systemGray5: { value: '#2C2C2E' },
          systemGray6: { value: '#1C1C1E' },
          main: { value: '#F83E00' },
          'main-54': { value: 'rgba(248, 62, 0, 0.54)' },
          'main-26': { value: 'rgba(248, 62, 0, 0.26)' },
          '100': { value: 'rgba(255, 255, 255, 1)' },
          '80': { value: 'rgba(255, 255, 255, 0.80)' },
          '54': { value: 'rgba(255, 255, 255, 0.54)' },
          '20': { value: 'rgba(255, 255, 255, 0.20)' },
        },
        lineHeights: {
          normal: { value: '1.2' },
        },
        zIndex: {
          navigator: { value: 500 },
        },
        sizes: PANDA_CSS_CONSTANTS,
        spacing: PANDA_CSS_CONSTANTS,
      },
    },
  },

  // 글꼴 설정
  globalFontface: {
    Pretendard: {
      src: "url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');",
      fontWeight: '400',
      fontStyle: 'normal',
      fontDisplay: 'swap',
    },
  },

  // 전역 스타일 설정
  globalCss: {
    html: {
      fontFamily:
        'Pretendard, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      backgroundColor: 'systemGray6',
      color: '100',
    },
  },

  jsxFramework: 'react',

  // The output directory for your css system
  outdir: 'styled-system',
});
