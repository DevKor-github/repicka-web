import { cx } from '@styled-system/css';
import * as s from './style.css';
import getImageUrl from '@/common/utils/getImageUrl';

interface SelectedPhotoProps {
  src: string;
  onClick?: () => void;
}

const SelectedPhoto = ({ src, onClick }: SelectedPhotoProps) => {
  const imageUrl = getImageUrl(src);

  return (
    <div className={s.Container}>
      <img src={imageUrl} className={s.UploadedPhoto} alt="이미지가 업로드되지 않았습니다" />
      <div className={cx('mgc_close_fill', s.CancelBtn)} onClick={onClick} />
    </div>
  );
};

export default SelectedPhoto;
