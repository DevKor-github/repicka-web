import * as s from './style.css';
import rental from '@/assets/images/rental.png';
import sale from '@/assets/images/sale.png';

interface TypeCardProps {
    isSelected: boolean,
    types: '판매할래요' | '대여할래요',
    onClick?: () => void;
}

const TypeCard = ({ isSelected, types, onClick }: TypeCardProps) => {
    const iconClass = isSelected ?'mgc_check_fill' : 'mgc_add_fill';
    const imageClass = types === '판매할래요' ? sale : rental;

    return (
        <div className={s.CardContainer({ isSelected: isSelected })} onClick={onClick}>
            <div className={s.IconContainer}>
                <div className={`${iconClass} ${s.Icon({ isSelected })}`}></div>
            </div>
            <img src={imageClass}></img>
            {types}
        </div>
    );
};

export default TypeCard;
