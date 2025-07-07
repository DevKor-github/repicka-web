import * as s from './style.css';

const SelectedPhoto = () => {
  return (
    <div className={s.Container}>
      <div className={s.SelectedPhoto} />
      <div className={`${'mgc_close_fill'} ${s.CancleBtn}`} />
    </div>
  );
};

export default SelectedPhoto;
