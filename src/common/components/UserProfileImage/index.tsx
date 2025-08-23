import getImageUrl from '@/common/utils/getImageUrl';
import * as s from './style.css';
import defaultImg from '@/libs/assets/defaultImg.png';

interface Props {
  src: string | null;
  nickname: string;
  isMyEdit?: boolean;
}

export const UserProfileImage = ({ src, nickname, isMyEdit }: Props) => {
  const cn = isMyEdit ? s.MyProfileEditImage : s.ProfileImage;
  const profileImage = src ? getImageUrl(src) : defaultImg;

  return <img className={cn} src={profileImage} alt={nickname} />;
};
