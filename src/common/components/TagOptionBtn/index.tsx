// 사용할 때 grid로 사용하기

import type { PropsWithChildren } from 'react';
import * as s from './style.css';
import iconMap from '@/common/assets/iconMap';
import colorMap from '@/common/assets/colorMap';

interface Props extends PropsWithChildren {
    color?: 'main' | 'gray';
    variant?: 'icon' | 'color';
    onClick?: () => void;
}

const TagOptionBtn = ({ children, color = 'gray', variant = 'icon', onClick }: Props) => {
    const label = String(children);
    let leftIconClass = iconMap[label];         // 왼쪽 아이콘 뭐 넣을지
    let isIcon = !!leftIconClass && variant === 'icon'; // 기타 색상인지 아이콘인지 구분하기 위해서 만듦...
    let isColor = !!colorMap[label] || variant === 'color';

    const rightIconClass = color === 'main' ? 'mgc_check_fill' : 'mgc_add_fill';
    
    const colorValue = colorMap[label];
    const isGradient = label === '기타'; 
    const paletteStyle = isGradient       // 동적으로 바꿔줘야 함
        ? { backgroundImage: 'linear-gradient(180deg, #FF6164 0%, #FF9462 28.85%, #FFBE62 67.31%, #8BFF61 100%)' }
        : { backgroundColor: colorValue };

    return (
        <button className={s.Container({ color })} onClick={onClick}>
            <div className={s.row}>
                <div className={s.iconLabel}>
                    {isIcon && (<span className={`${leftIconClass} ${s.leftIcon}`} />)}
                    {isColor && (<span className={s.colorPalette}
                            style={paletteStyle}/>)}
                    {children}
                </div>
                <div
                    className={`${rightIconClass} ${s.rightIcon({ color })}`}
                />
            </div>
        </button>
    );
};

export default TagOptionBtn;
