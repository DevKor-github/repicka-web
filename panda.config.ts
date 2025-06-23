import { defineConfig } from '@pandacss/dev';

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
        },
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
    },
  },

  jsxFramework: 'react',

  // The output directory for your css system
  outdir: 'styled-system',
});
