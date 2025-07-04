import { css } from "@styled-system/css";

export const Wrapper = css ({
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
})

export const Container = css({
    display: 'flex',
    gap: '0.58rem',
    height: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
})

export const Head = css({
    display: 'flex',
    alignItems: 'center', // 가로 가운데 정렬
    color: 'white',
    fontFamily: 'Pretendard',
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: '-0.05rem'
})