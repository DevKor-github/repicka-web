import { css, cva } from '@styled-system/css';

export const Container = css({
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
    '&:disabled': {
      color: '20',
    },
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

export const Icon = cva({
  variants: {
    direction: {
      left: {
        transform: 'rotate(0deg)',
      },
      right: {
        transform: 'rotate(180deg)',
      },
    },
  },
});
