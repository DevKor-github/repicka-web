import * as s from './style.css';

const Step5 = () => {
  return (
    <div>
      <header className={s.Head}>
        상품 소개를 선택해 주세요
      </header>
      <div className={s.Content}>
        <div className={s.DetailContent}>
          <div className={s.HeaderInputField}>
            상품명을 입력해 주세요
            <div style={{
              width: '100%',
              height: '2.75rem',
              backgroundColor: '#2C2C2E',
              borderRadius: '0.375rem'
            }} />
            {/* TODO: 입력 필드로 고칠 것 */}
          </div>
        </div>
        <div className={s.DetailContent}>
          <div className={s.HeaderInputField}>
            상품 설명을 입력해 주세요
            <div style={{
              width: '100%',
              height: '2.75rem',
              backgroundColor: '#2C2C2E',
              borderRadius: '0.375rem'
            }} />
            {/* TODO: 입력 필드로 고칠 것 */}
          </div>
        </div>
      </div>
    </div>);
};

export default Step5;
