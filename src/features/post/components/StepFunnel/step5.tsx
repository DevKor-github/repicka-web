import InputField from '../InputField';
import MultilineInputfield from '../MultilineInputField';
import * as s from './style.css';

import SelectedPhoto from '../SelectedPhoto';

const Step5 = () => {
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
              <div className={`${'mgc_camera_2_fill'} ${s.SelectedPhotoBtn}`} />
              {/* TODO: 사진 추가 기능 넣기 */}
              <SelectedPhoto />

              {/* TODO: 넣은 사진 개수만큼 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;
