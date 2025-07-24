import * as s from './style.css';

const SortDrawer = () => {
  return (
    <div className={s.ButtonWrapper}>
      <button className={s.Button}>
        추천순
        <span className={'mgc_check_fill'} />
      </button>
      <button className={s.Button}>최신순</button>
      <button className={s.Button}>가격순</button>
      <button className={s.Button}>좋아요순</button>
    </div>
  );
};
export default SortDrawer;
