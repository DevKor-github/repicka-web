import VerifyIcon from '@/libs/assets/VerifyIcon';

import * as s from './style.css';

// TODO: 디자인 업데이트 ... 지금 인증된 유저가 없어서 확인이 불가능 ㅋㅋ
const SchoolVerifiedTag = () => {
  return (
    <span className={s.Container}>
      <p>학교인증</p>
      <VerifyIcon />
    </span>
  );
};
export default SchoolVerifiedTag;
