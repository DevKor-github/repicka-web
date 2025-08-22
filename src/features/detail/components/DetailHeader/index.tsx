import { useNavigate } from 'react-router';

import * as s from './style.css';

import useDrawer from '@/common/hooks/useDrawer';
import OptionDrawer from '@/features/detail/components/OptionDrawer';

interface Props {
  itemId: number;
  isMine: boolean;
}
const DetailHeader = ({ itemId, isMine }: Props) => {
  const navigate = useNavigate();
  const { open, drawerState } = useDrawer();

  const goBack = () => navigate(-1);

  return (
    <>
      <div className={s.Filter} />
      <header className={s.Container}>
        <button className={`mgc_left_line ${s.BackButton}`} onClick={goBack} aria-label="Go back" />
        <div className={s.RightSide}>
          <button className={`${s.RightButton} mgc_share_3_fill`} aria-label="Share item" />
          {isMine && <button className={`${s.RightButton} mgc_more_2_fill`} onClick={open} />}
        </div>
      </header>
      <OptionDrawer itemId={itemId} drawerState={drawerState} />
    </>
  );
};
export default DetailHeader;
