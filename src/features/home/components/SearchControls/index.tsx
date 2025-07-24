import SelectButton from '@/common/components/SelectButton';
import * as s from './style.css';

interface Props {
  itemCounts: number;
}
const SearchControls = ({ itemCounts }: Props) => {
  return (
    <div className={s.Container}>
      <div className={s.ResultBar}>
        <span>검색결과</span>
        <span className={s.ResultCount}>({itemCounts})</span>
      </div>
      <div className={s.SelectButtonContainer}>
        {/* TODO: 디자인 적용, 필터 로직 추가 */}
        <SelectButton active={false}>종목</SelectButton>
        <SelectButton active={false}>사이즈</SelectButton>
        <SelectButton active={false}>대여/판매</SelectButton>
        <SelectButton active={false}>가격순</SelectButton>
        <SelectButton active={false}>색상</SelectButton>
      </div>
    </div>
  );
};
export default SearchControls;
