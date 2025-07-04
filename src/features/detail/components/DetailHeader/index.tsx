import { useNavigate } from 'react-router';
import * as s from './style.css';

const DetailHeader = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  // TODO: Action 추가
  return (
    <header
      className={s.Container}
      style={{
        top: 'calc(env(safe-area-inset-top))',
      }}
    >
      <button className={`mgc_left_line ${s.BackButton}`} onClick={goBack} />
      <div className={s.RightSide}>
        <button className={`${s.RightButton} mgc_share_3_fill`} />
        <button className={`${s.RightButton} mgc_more_2_fill`} />
      </div>
    </header>
  );
};
export default DetailHeader;
