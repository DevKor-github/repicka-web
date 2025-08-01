import { useSearchParams } from 'react-router';
import * as s from './style.css';
import { ItemOrderArray, ItemOrderMap, type ItemOrderType } from '@/features/home/types';

interface Props {
  close: () => void;
}
const SortDrawer = ({ close }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const itemOrder = (searchParams.get('sort') || 'RECENT') as ItemOrderType;

  const handleSort = (sort: ItemOrderType) => {
    if (itemOrder === sort) {
      searchParams.delete('sort');
    } else {
      searchParams.set('sort', sort);
    }
    setSearchParams(searchParams);
    close();
  };

  return (
    <div className={s.ButtonWrapper}>
      {ItemOrderArray.map(order => (
        <button key={order} className={s.Button} onClick={() => handleSort(order)}>
          {ItemOrderMap[order]}
          {order === itemOrder && <span className={'mgc_check_fill'} />}
        </button>
      ))}
    </div>
  );
};
export default SortDrawer;
