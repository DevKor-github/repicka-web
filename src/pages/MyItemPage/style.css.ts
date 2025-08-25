import { css } from '@styled-system/css';

export const Wrapper = css({
  display: 'flex',
  flex: 1,
  height: 'calc(100% - {sizes.HEADER_HEIGHT})',
});
