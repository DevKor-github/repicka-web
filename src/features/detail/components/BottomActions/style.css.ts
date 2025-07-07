import { css } from '@styled-system/css';

export const Container = css({
  position: 'fixed',
  bottom: '0',
  left: '0',
  right: '0',
  display: 'flex',
  gap: '0.69rem',
  px: '1rem',
  pt: '1rem',
  bgColor: 'systemGray6',
  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
  roundedTop: '10px',
  height: 'DETAIL_PAGE_NAVIGATOR_HEIGHT',
});

export const ChatButton = css({
  flexShrink: 0,
  width: '5.875rem',
  display: 'flex',
  gap: '0.625rem',
  justifyContent: 'center',
  alignItems: 'center',
  '& span': {
    fontSize: '1.25rem',
    flexShrink: 0,
  },
});

export const SelectButton = css({
  flexGrow: 1,
  flexBasis: 0,
});
