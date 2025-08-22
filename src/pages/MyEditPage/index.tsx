// 파일 선택자로 수정된 경우 -> getFileKey를 받아서 해당 fileKey를 붙여서 내기 (s3에 먼저 저장)
// 파일 선택자로 수정되지 않은 경우 -> 그대로 보내기
// nickname, profileImgUrl이 각각 바뀌었는지... 를 약간 인덱싱 해서 관리해야 할 것 같은데 말이지?

import * as s from './style.css';
import MyHeader from '@/common/components/MyHeader';
import { useNavigate, useLocation } from 'react-router';
import Btn from '@/common/components/Button';
import { usePutUser } from '@/features/myEdit/apis/usePutUser';
import MyEditContent from '@/features/myEdit/components/MyEditContent';
import { useState } from 'react';
import type { UserInterface } from '@/libs/types/user';
import CustomAlert from '@/common/components/CustomAlert';

type MyEditState = { data: UserInterface };

const MyEditPage = () => {
  const { state } = useLocation();
  const { data } = (state ?? {}) as MyEditState;

  const [nickname, setNickname] = useState<string>(data.nickname);
  const [profileImageUrl, setProfileImageUrl] = useState<string | null>(data.profileImageUrl);
  const [fileKey, setFileKey] = useState<string>('');

  const isNicknameEdited = nickname !== data.nickname && nickname.length >= 2 && nickname.length <= 10;
  const isProfileEdited = profileImageUrl !== data.profileImageUrl;

  const isEdited = isNicknameEdited || isProfileEdited ? 'main' : 'disabled';

  const [showAlert, setShowAlert] = useState(false);

  const { mutate: updateUser } = usePutUser();
  const navigate = useNavigate();

  const onSave = () => {
    updateUser(
      {
        nickname: nickname,
        profileImageUrl: fileKey,
        gender: data.gender,
        height: data.height,
        weight: data.weight,
      },
      { onSuccess: () => navigate(-1) },
    );
  };

  const onNo = () => {
    setShowAlert(false);
  };

  const onYes = () => {
    navigate(-1);
  };

  const onShowAlert = () => {
    if (isEdited === 'main') setShowAlert(true);
    else navigate(-1);
  };

  return (
    <>
      <div className={s.EntireLayout}>
        <MyHeader title="프로필 수정하기" onClick={onShowAlert} />
        <MyEditContent
          nickname={nickname}
          setNickname={setNickname}
          isNicknameEdited={isNicknameEdited}
          profileImageUrl={profileImageUrl}
          setProfileImageUrl={setProfileImageUrl}
          setFileKey={setFileKey}
        />
        <div className={s.Footer}>
          <Btn mode={isEdited} onClick={onSave}>
            저장하기
          </Btn>
        </div>
      </div>
      {showAlert && (
        <CustomAlert
          Title="지금 그만두면 변경사항이 저장되지 않아요!"
          subTitle="정말 그만두실 건가요?"
          onNo={onNo}
          onYes={onYes}
          yesBtn="네, 그만둘래요"
        />
      )}
    </>
  );
};

export default MyEditPage;
