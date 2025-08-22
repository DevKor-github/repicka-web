import * as s from './style.css';
import MyHeader from '@/common/components/MyHeader';
import { useNavigate, useLocation } from 'react-router';
import Btn from '@/common/components/Button';
import { usePutUser } from '@/features/myEdit/apis/usePutUser';
import MyEditContent from '@/features/myEdit/components/MyEditContent';
import { useState } from 'react';
import type { UserInterface } from '@/libs/types/user';
import CustomAlert from '@/common/components/CustomAlert';
import { getFileKey } from '@/common/utils/getFileKeys';

type MyEditState = { data: UserInterface };

const MyEditPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { data } = (state ?? {}) as MyEditState;

  const [nickname, setNickname] = useState<string>(data.nickname);
  const [file, setFile] = useState<File>();
  const [showAlert, setShowAlert] = useState(false);

  const isNicknameEdited = nickname !== data.nickname && nickname.length >= 2 && nickname.length <= 10;
  const isProfileEdited = !!file;
  const isEdited = isNicknameEdited || isProfileEdited ? 'main' : 'disabled';

  const { mutate: updateUser } = usePutUser();

  const onSave = async () => {
    let profileImageUrl: string | null = data.profileImageUrl;
    let fileData: { file: File; presignedUrl: string } | undefined = undefined;

    if (file) {
      const { fileKey, presignedUrl } = await getFileKey(file);
      profileImageUrl = fileKey;
      fileData = { file, presignedUrl };
    }

    updateUser({
      userData: {
        nickname,
        profileImageUrl,
        gender: data.gender,
        height: data.height,
        weight: data.weight,
      },
      fileData,
    });

    navigate(-1);
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
          setFile={setFile}
          profileImageUrl={data.profileImageUrl}
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
