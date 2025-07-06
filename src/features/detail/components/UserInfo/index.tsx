import type { UserInterface } from '@/libs/types/user';

import * as s from './style.css';
import VerifyIcon from '@/libs/assets/VerifyIcon';

interface Props {
  userData: UserInterface;
}
const UserInfo = ({ userData }: Props) => {
  return (
    <div className={s.Container}>
      <div className={s.Wrapper}>
        <div className={s.UserInfo}>
          <img className={s.ProfileImage} src={userData.profileImageUrl} alt={userData.nickname} />
          <div className={s.UserInfoText({ isVerified: userData.isKoreanUnivVerified })}>
            {userData.isKoreanUnivVerified && (
              <span className={s.VerifiedTag}>
                <p>학교인증</p>
                <VerifyIcon />
              </span>
            )}
            <p>{userData.nickname}</p>
          </div>
        </div>
        {/* TODO: 좋아요 누르기 */}
        <button className={`${s.LikeButton} mgc_heart_line`} />
      </div>
      <div className={s.Line} />
    </div>
  );
};
export default UserInfo;
