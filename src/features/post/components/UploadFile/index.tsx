import { ALLOWED_EXTENSIONS } from '@/libs/constants';
import * as s from './style.css';

interface UploadPhotoProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UploadFile = ({ onChange }: UploadPhotoProps) => {
  return (
    <label className={s.SelectedPhotoBtn}>
      <input
        type="file"
        accept={ALLOWED_EXTENSIONS.map(val => '.' + val).join()}
        multiple
        onChange={onChange}
        className={s.Input}
      />
      <div className="mgc_camera_2_fill" />
    </label>
  );
};

export default UploadFile;
