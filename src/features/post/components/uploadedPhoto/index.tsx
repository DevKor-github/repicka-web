import * as s from './style.css';

interface SelectedPhotoProps {
  file: File;
  onClick?: () => void;
}

const SelectedPhoto = ({ file, onClick }: SelectedPhotoProps) => {
  const imageUrl = URL.createObjectURL(file);

  return (
    <div className={s.Container}>
      <img src={imageUrl} className={s.UploadedPhoto} />
      <div className={`mgc_close_fill ${s.CancleBtn}`} onClick={onClick} />
    </div>
  );
};

export default SelectedPhoto;
