import * as s from './style.css';

interface Props {
  profileImageUrl: string | undefined;
  nickname: string;
}

export const UserProfileImage = ({ profileImageUrl, nickname }: Props) => {
  return <img className={s.ProfileImage} src={profileImageUrl} alt={nickname} />;
};
