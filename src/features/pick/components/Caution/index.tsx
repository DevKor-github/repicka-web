import * as s from './style.css';

const Caution = () => {
  return (
    <div className={s.Container}>
      <span className="mgc_warning_fill" />
      <p>개인정보 보호를 위해 택배 거래 시 필요한 연락처, 주소 등은 채팅을 통해 공유해 주세요!</p>
    </div>
  );
};
export default Caution;
