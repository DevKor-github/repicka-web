import InputField from '@/features/post/components/InputField';
import { cx } from '@styled-system/css';
import * as s from './style.css';
import { useRef } from 'react';
import { UserProfileImage } from '@/common/components/UserProfileImage';
import { getFileKey } from '@/common/utils/getFileKeys';

interface Props {
  nickname: string;
  setNickname: (value: string) => void;
  profileImageUrl: string | null;
  setProfileImageUrl: (value: string) => void;
  setFileKey: (value: string) => void;
  isNicknameEdited: boolean;
}

const MyEditContent = ({
  nickname,
  setNickname,
  isNicknameEdited,
  profileImageUrl,
  setProfileImageUrl,
  setFileKey,
}: Props) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onClickCamera = () => {
    fileInputRef.current?.click();
  };

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // 첫 번째로 고른 파일 선택
    if (!file) return;

    const fileKey = await getFileKey(file);

    setProfileImageUrl(URL.createObjectURL(file));
    setFileKey(fileKey);
  };

  return (
    <div className={s.Wrapper}>
      <div className={s.EditImage} onClick={onClickCamera}>
        <UserProfileImage nickname={nickname} profileImageUrl={profileImageUrl} isMyEdit />
        <div className={cx('mgc_camera_2_fill', s.SelectPhoto)} />
      </div>

      <input type="file" accept="image/*" style={{ display: 'none' }} ref={fileInputRef} onChange={onFileChange} />

      <div className={s.Content}>
        <h1>닉네임</h1>
        <InputField setValue={setNickname} value={nickname} maxLength={10} isEdited={isNicknameEdited} />
      </div>
    </div>
  );
};

export default MyEditContent;
