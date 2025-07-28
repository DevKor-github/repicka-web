import SelectButton from '@/common/components/SelectButton';
import * as s from './style.css';
import useDrawer from '@/common/hooks/useDrawer';
import { css } from '@styled-system/css';
import Drawer from '@/common/components/Drawer';

interface Props {
  itemCounts: number;
}
const SearchControls = ({ itemCounts }: Props) => {
  const { open, drawerState } = useDrawer();

  return (
    <div className={s.Container}>
      <div className={s.ResultBar}>
        <span>검색결과</span>
        <span className={s.ResultCount}>({itemCounts})</span>
      </div>
      <div className={s.SelectButtonContainer}>
        {/* TODO: 디자인 적용, 필터 로직 추가 */}
        <SelectButton
          active={false}
          onClick={() => {
            open();
          }}
        >
          종목
        </SelectButton>
        <SelectButton active={false}>사이즈</SelectButton>
        <SelectButton active={false}>대여/판매</SelectButton>
        <SelectButton active={false}>가격순</SelectButton>
        <SelectButton active={false}>색상</SelectButton>
      </div>
      <Drawer title="필터" description="필터를 선택해주삼" drawerState={drawerState}>
        <div className={css({ height: '10rem', px: '1rem', pt: '1rem' })}>안녕하세요 호호</div>
      </Drawer>
    </div>
  );
};
export default SearchControls;
