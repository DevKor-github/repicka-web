import { cva } from "@styled-system/css";

export const Container = cva({
    base: {
        borderRadius: 'full',
        padding: '',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: '100'
    },
    variants: {
        color: {
            main: {

            },
            gray: {

            }
        }
    }
})