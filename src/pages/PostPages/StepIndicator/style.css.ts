import { css, cva } from "@styled-system/css";

export const progressCircle = cva({
    base: {
        height: '0.375rem',
        transition: 'all 0.3s ease-in-out'
    },
    variants: {
        isActive: {
            true: {
                backgroundColor: 'main',
                borderRadius: '0.625rem',
            },
            false: {
                backgroundColor: '54',
                borderRadius: 'full',
            }
        },
        isCurrent: {
            true: {
                width: '0.875rem'
            },
            false: {
                width: '0.375rem'
            }
        }
    }
})

export const Container = css({
    display: 'flex', 
    flex: '1',
    gap: '0.41rem', 
    margin: '0 0 1.5rem 0', 
    justifyContent: 'center', 
    alignItems: 'center'
})