import * as s from './style.css';

import ItemList from '@/features/home/components/ItemList';

const RecentList = () => {
  return (
    <div className={s.Wrapper}>
      <h2 className={s.Title}>최신 상품</h2>
      <ItemList />
    </div>
  );
};
export default RecentList;
