import getImageUrl from '@/common/utils/getImageUrl';
import * as s from './style.css';
import defaultImg from '@/libs/assets/defaultImg.png';

interface Props {
  profileImageUrl: string | null;
  nickname: string;
  isMyEdit?: boolean;
}

export const UserProfileImage = ({ profileImageUrl, nickname, isMyEdit }: Props) => {
  const cn = isMyEdit ? s.MyProfileEditImage : s.ProfileImage;
  const profileImage = profileImageUrl ? getImageUrl(profileImageUrl) : defaultImg;

  return <img className={cn} src={profileImage} alt={nickname} />;
};
