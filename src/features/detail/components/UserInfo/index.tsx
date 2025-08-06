import type { UserInterface } from '@/libs/types/user';

import * as s from './style.css';
import SchoolVerifiedTag from '@/common/components/SchoolVerifiedTag';
import { usePostLike } from '@/features/detail/apis/usePostLike';
import { UserProfileImage } from '@/common/components/UserProfileImage';

interface Props {
  userData: UserInterface;
  itemId: number;
  isLiked: boolean;
}
const UserInfo = ({ userData, itemId, isLiked }: Props) => {
  const { mutate: likeItem } = usePostLike();

  return (
    <div className={s.Container}>
      <div className={s.Wrapper}>
        <div className={s.UserInfo}>
          <UserProfileImage nickname={userData.nickname} profileImageUrl={userData.profileImageUrl} />
          <div className={s.UserInfoText({ isVerified: userData.isKoreanUnivVerified })}>
            {<SchoolVerifiedTag />}
            <p>{userData.nickname}</p>
          </div>
        </div>
        <button
          className={`${s.LikeButton({ isLiked })} ${isLiked ? 'mgc_heart_fill' : 'mgc_heart_line'}`}
          onClick={() => likeItem(itemId)}
          aria-label={isLiked ? 'Unlike item' : 'Like item'}
        />
      </div>
      <div className={s.Line} />
    </div>
  );
};
export default UserInfo;
