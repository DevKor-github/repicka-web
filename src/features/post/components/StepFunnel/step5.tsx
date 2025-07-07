import InputField from '../InputField';
import MultilineInputfield from '../MultilineInputField';
import * as s from './style.css';

import SelectedPhoto from '../SelectedPhoto';
import UploadPhoto from '../UploadPhoto';

const Step5 = () => {
  const handleImageUploaded = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length) return;

    console.log('선택된 파일: ', files);
    // TODO: 선택된 파일 저장해 두기
  };

  return (
    <div>
      <header className={s.Head}>상품 소개를 작성해 주세요</header>
      <div className={s.Content}>
        <div className={s.DetailContent}>
          <div className={s.HeaderInputField}>
            상품명을 입력해 주세요
            <InputField />
          </div>
        </div>
        <div className={s.DetailContent}>
          <div className={s.ProductDesc}>
            <div className={s.HeaderInputField}>
              상품 설명을 입력해 주세요
              <MultilineInputfield />
            </div>
            <div className={s.SelectPhotoContainer}>
              <UploadPhoto onChange={handleImageUploaded} />
              {/* TODO: 넣은 사진 개수만큼 */}
              <SelectedPhoto />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;
