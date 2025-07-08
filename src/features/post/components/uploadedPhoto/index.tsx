import * as s from './style.css';

interface SelectedPhotoProps {
  file: string;
  onClick?: () => void;
}

const SelectedPhoto = ({ file, onClick }: SelectedPhotoProps) => {
  const imageUrl = file;

  return (
    <div className={s.Container}>
      <img src={imageUrl} className={s.UploadedPhoto} alt="이미지가 업로드되지 않았습니다" />
      <div className={`mgc_close_fill ${s.CancelBtn}`} onClick={onClick} />
    </div>
  );
};

export default SelectedPhoto;
