import InputField from '@/features/post/components/InputField';
import { cx } from '@styled-system/css';
import * as s from './style.css';
import { useRef, useState } from 'react';
import { UserProfileImage } from '@/common/components/UserProfileImage';
import { ALLOWED_EXTENSIONS } from '@/libs/constants';

interface Props {
  nickname: string;
  setNickname: (value: string) => void;
  setFile: (value: File) => void;
  profileImageUrl: string | null;
  isNicknameEdited: boolean;
  isImgEdited: boolean;
}

const MyEditContent = ({ nickname, setNickname, isNicknameEdited, setFile, profileImageUrl, isImgEdited }: Props) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [src, setSrc] = useState<string | null>(profileImageUrl);

  const onClickCamera = () => {
    fileInputRef.current?.click();
  };

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // 첫 번째로 고른 파일 선택
    if (!file) return;

    setFile(file);
    setSrc(URL.createObjectURL(file));
  };

  return (
    <div className={s.Wrapper}>
      <div className={s.EditImage} onClick={onClickCamera}>
        <UserProfileImage nickname={nickname} src={src} isMyEdit isEdited={isImgEdited} />
        <div className={cx('mgc_camera_2_fill', s.SelectPhoto)} />
      </div>

      <input
        type="file"
        accept={ALLOWED_EXTENSIONS.map(val => '.' + val).join()}
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={onFileChange}
      />

      <div className={s.Content}>
        <h1>닉네임</h1>
        <InputField setValue={setNickname} value={nickname} maxLength={10} isEdited={isNicknameEdited} />
      </div>
    </div>
  );
};

export default MyEditContent;
