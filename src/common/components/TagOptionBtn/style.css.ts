import { cva, css } from "@styled-system/css";

export const Container = cva({
    base: {
        borderRadius: '0.5rem',
        padding: '0.81rem 0.69rem',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        lineHeight: 'normal',
        letterSpacing: '-0.04rem',
        border: '1px solid',
    },
    variants: {
        color: {
            main: {
                borderColor: 'main-54',
                bgColor: 'main-26',
                fontWeight: 600,
                color: '100'
            },
            gray: {
                borderColor: 'systemGray5',
                bgColor: 'systemGray5',
                fontWeight: 400,
                color: '80',
            }
        }
    }
})
// style.css.ts
export const colorPalette = css({
    width: '1.25rem',
    height: '1.25rem',
    borderRadius: '9999px',
    padding: '1px',
    borderColor: 'white',
    border: '0.125rem solid'
  });

export const row = css({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: '1'
})

export const iconLabel = css({
    display: 'flex',
    gap: '0.62rem',
    justifyContent: 'center',
    alignItems: 'center',
})

export const leftIcon = css({
    fontSize: '1.25rem',
})

export const rightIcon = cva({
    base: {
        borderRadius: '0.76rem',
        width: '1.52225rem',
        height: '1.52225rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    variants: {
        color: {
            main: {
                color: '80',
                bgColor: 'main'
            },
            gray: {
                color: '54',
                bgColor: 'systemGray3',
            }
        }
    }
})