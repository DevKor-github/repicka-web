import * as s from './style.css';
import rental from '@/assets/images/rental.png';
import sale from '@/assets/images/sale.png';

interface TypeCardProps {
    color?: 'gray' | 'main',
    types?: '판매할래요' | '대여할래요',
    onClick?: () => void;
}

const TypeCard = ({ color, types, onClick }: TypeCardProps) => {
    const iconClass = color === 'main' ?'mgc_check_fill' : 'mgc_add_fill';
    const imageClass = types === '판매할래요' ? sale : rental;

    return (
        <div className={s.CardContainer({ color: color })} onClick={onClick}>
            <div className={s.IconContainer}>
                <div className={`${iconClass} ${s.Icon({ color: color })}`}></div>
            </div>
            <img src={imageClass}></img>
            {types}
        </div>
    );
};

export default TypeCard;
