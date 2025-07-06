import { css } from '@styled-system/css';

export const Wrapper = css({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const Container = css({
  display: 'flex',
  gap: '0.58rem',
  height: '100%',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Grid = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '0.62rem',
});

export const Head = css({
  display: 'flex',
  alignItems: 'center', // 가로 가운데 정렬
  color: 'white',
  fontFamily: 'Pretendard',
  fontSize: '1.25rem',
  fontWeight: 600,
  lineHeight: 1.4,
  letterSpacing: '-0.05rem',
  gap: '0.62rem',
});

export const Content = css({
  display: 'flex',
  flexDirection: 'column',
  margin: '2.97rem 0 0 0',
  gap: '2.25rem'
});

export const DetailContent = css({
  display: 'flex',
  flexDirection: 'column',
  color: '100',
  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '1.4',
  letterSpacing: '-0.04rem',
  gap: '0.875rem'
})

export const ContentHeader = css({
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'stretch',
  gap: '0.38rem'
})

export const ChipColumn = css({
  display: 'flex',
  alignItems: 'flex-start',
  alignContent: 'flex-start',
  gap: '0.5625rem 0.5rem',
  alignSelf: 'stretch',
  flexWrap: 'wrap',
})

export const TokenContainer = css({
  marginBottom: '0.75rem'
})

export const HeaderInputField = css({   // step6에서 
  display: 'flex',
  flexDirection: 'column',
  margin: '0 0 1.25rem 0',
  gap: '1rem'
})

export const PriceContent = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
  color: '100',
  fontFamily: 'Pretendard',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '1.4',
  letterSpacing: '-0.04rem'
})

export const CanDeal = css({
  color: '80',
  fontFamily: 'Pretendard',
  fontSize: '0.875rem',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '1.4',
  letterSpacing: '-0.035rem'
})