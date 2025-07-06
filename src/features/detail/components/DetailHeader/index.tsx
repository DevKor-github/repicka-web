import { useNavigate } from 'react-router';
import * as s from './style.css';

const DetailHeader = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  // TODO: Action 추가
  return (
    <>
      {/* TODO: 필터 어디 종속시킬지 아직 미확정... */}
      <div className={s.Filter} />
      <header className={s.Container}>
        <button className={`mgc_left_line ${s.BackButton}`} onClick={goBack} aria-label="Go back" />
        <div className={s.RightSide}>
          <button className={`${s.RightButton} mgc_share_3_fill`} />
          <button className={`${s.RightButton} mgc_more_2_fill`} />
        </div>
      </header>
    </>
  );
};
export default DetailHeader;
