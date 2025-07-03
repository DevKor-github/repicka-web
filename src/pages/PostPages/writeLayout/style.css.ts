import { css } from "@styled-system/css";

export const stepBtn = css ({
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingBottom: '2.62rem',
})

export const entireLayout = css ({
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
})

export const innerPage = css ({
    flex: 1, overflowY: 'auto'
})

export const Container = css ({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    height: '4.44rem'
})

export const closeBtn = css ({
    position: 'absolute',
    left: '1rem',
    cursor: 'pointer',
    width: '1.25rem',
    color: '80',
    flexShrink: '1',
    aspectRatio: '1/1',
    fontSize: '20px'
})

export const headerText = css ({
    flex: '1',
    color: '100',
    textAlign: 'center',
    fontFamily: 'Pretendard',
    fontSize: '1.25rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
    letterSpacing: '-0.05rem'
})