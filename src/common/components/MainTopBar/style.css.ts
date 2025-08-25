import { css } from '@styled-system/css';

export const Wrapper = css({
  w: 'full',
  h: 'HEADER_HEIGHT',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  padding: '1.5rem 1.25rem 1.5rem 1rem',
});

export const Title = css({
  display: 'flex',
  alignItems: 'center',
  gap: '0.45rem',
  color: '100',
});

export const LogoContainer = css({
  width: '1.5rem',
  height: '1.5rem',
});

export const Menu = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '0.75rem',
  fontSize: '1.5rem',
  color: 'systemGray',
  '& button': {
    cursor: 'pointer',
  },
});
