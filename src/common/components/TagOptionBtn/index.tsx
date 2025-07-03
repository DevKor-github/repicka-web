import type { PropsWithChildren } from 'react';
import * as s from './style.css'

interface Props extends PropsWithChildren {
    color?: 'main' | 'gray';
}

const TagOptionBtn = ({ children, color = 'main' } : Props) => {
    return (
        <button className = {s.Container({color: color})}>
            {children}
        </button>
    );
};

export default TagOptionBtn;