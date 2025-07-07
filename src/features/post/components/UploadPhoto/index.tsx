import * as s from './style.css';

interface UploadPhotoProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UploadPhoto = ({ onChange }: UploadPhotoProps) => {
  return (
    <label className={s.SelectedPhotoBtn}>
      <input type="file" accept="image/*" multiple onChange={onChange} className={s.Input} />
      <div className="mgc_camera_2_fill" />
    </label>
  );
};

export default UploadPhoto;
