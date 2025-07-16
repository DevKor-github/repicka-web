import { useNavigate } from 'react-router';
import * as s from './style.css';
import { useDeleteItem } from '@/features/detail/apis/useDeleteItem';

interface Props {
  itemId: number;
  isMine: boolean;
}
const DetailHeader = ({ itemId, isMine }: Props) => {
  const navigate = useNavigate();
  const { mutate: deleteItem } = useDeleteItem();

  const goBack = () => navigate(-1);

  const handleMoreButtonClick = () => {
    // TODO: 모달 띄우든가 액션 추가
    deleteItem(itemId, {
      onSuccess: () => {
        navigate(-1);
      },
    });
  };

  // TODO: Action 추가
  return (
    <>
      {/* TODO: 필터 어디 종속시킬지 아직 미확정... */}
      <div className={s.Filter} />
      <header className={s.Container}>
        <button className={`mgc_left_line ${s.BackButton}`} onClick={goBack} aria-label="Go back" />
        <div className={s.RightSide}>
          <button className={`${s.RightButton} mgc_share_3_fill`} />
          {isMine && <button className={`${s.RightButton} mgc_more_2_fill`} onClick={handleMoreButtonClick} />}
        </div>
      </header>
    </>
  );
};
export default DetailHeader;
