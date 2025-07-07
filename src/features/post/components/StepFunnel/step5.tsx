import InputField from '../InputField';
import * as s from './style.css';

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
          <div className={s.HeaderInputField}>
            상품 설명을 입력해 주세요
            <InputField />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;
