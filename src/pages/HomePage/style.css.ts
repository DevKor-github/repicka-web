import { css } from '@styled-system/css';

// 이런 식으로 CSS 파일 분리해서 쓰기

export const Title = css({
  color: 'main',
});

export const Container = css({ display: 'flex', flexDirection: 'column', gap: '1rem' });
