import { css } from '@styled-system/css';

export const Container = css({
  display: 'flex',
  p: '0.25rem 0.625rem 0.25rem 0.5rem',
  alignItems: 'center',
  gap: '0.1875rem',
  rounded: '0.625rem',
  bg: 'systemGray5',
  color: '100',
  fontSize: '0.75rem',
  fontWeight: 500,
  lineHeight: '0.87788rem',
});

export const Icon = css({
  fontSize: '1rem',
});

export const DatePickerContainer = css({
  pt: '2.5rem',
  px: '1rem',
  display: 'flex',
  flexDir: 'column',
  gap: '1.4375rem',
});

export const DatePicker = css({
  '& .react-calendar': {
    display: 'flex',
    flexDir: 'column',
    gap: '1.4375rem',
    alignItems: 'center',
  },
  '& .react-calendar__navigation': {
    color: '100',
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: 'normal',
    letterSpacing: '-0.04rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  '& .react-calendar__viewContainer': {
    width: 'full',
  },
  '& .react-calendar__month-view__weekdays': {
    marginBottom: '1rem',
  },
  '& .react-calendar__month-view__weekdays__weekday': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#9BA2B1',
    fontSize: '0.75rem',
    fontWeight: 600,
    letterSpacing: '-0.03rem',
    height: '1.9375rem',
    '& abbr': {
      textDecoration: 'none',
    },
  },
  '& .react-calendar__month-view__days': {
    rowGap: '1rem',
  },
  '& .react-calendar__tile': {
    height: '2.125rem',
    color: '80',
    fontSize: '0.75rem',
    fontWeight: 400,
    letterSpacing: '-0.03rem',
  },
  '& .react-calendar__month-view__days__day--neighboringMonth': {
    color: '20',
  },
  '& .react-calendar__tile--active': {
    bg: 'main-26',
  },
  '& .react-calendar__tile--rangeStart, .react-calendar__tile--rangeEnd': {
    position: 'relative',
    '& abbr': {
      position: 'relative',
      zIndex: 705,
    },
    _after: {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate3d(-50%, -50%, 0)',
      width: '2.125rem',
      height: '2.125rem',
      rounded: 'full',
      bg: 'main',
      zIndex: 701,
    },
  },
  '& .react-calendar__tile--rangeStart': {
    bg: 'linear-gradient(to right, transparent 50%, {colors.main-26} 50%)',
  },
  '& .react-calendar__tile--rangeEnd': {
    bg: 'linear-gradient(to left, transparent 50%, {colors.main-26} 50%)',
  },
  '& .react-calendar__tile--rangeBothEnds': {
    bg: 'transparent',
  },
});
