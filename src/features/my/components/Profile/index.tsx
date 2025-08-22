import SchoolVerifiedTag from '@/common/components/SchoolVerifiedTag';
import { UserProfileImage } from '@/common/components/UserProfileImage';
import { cx } from '@styled-system/css';
import * as s from './style.css';
import type { UserInterface } from '../../types';
import { Link } from 'react-router';

interface Props {
  data: UserInterface;
}

const Profile = ({ data }: Props) => {
  const isKorean = data.isKoreanUnivVerified;

  return (
    <Link className={s.Profile} to="/my-edit" state={{ data: data }}>
      <div className={s.UserInfo}>
        <UserProfileImage nickname={data.nickname} profileImageUrl={data.profileImageUrl} />
        <div className={s.Verifiy}>
          {isKorean && <SchoolVerifiedTag />}
          <span>{data.nickname}</span>
        </div>
      </div>
      <div className={cx('mgc_right_line', s.Icon)}></div>
    </Link>
  );
};

export default Profile;
