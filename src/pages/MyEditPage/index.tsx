import * as s from './style.css';
import MyHeader from '@/common/components/MyHeader';
import { useNavigate, useLocation } from 'react-router';
import Btn from '@/common/components/Button';
import { usePutUser } from '@/features/myEdit/apis/usePutUser';
import MyEditContent from '@/features/myEdit/components/MyEditContent';
import { useState, useEffect } from 'react';
import type { UserInterface } from '@/libs/types/user';
import CustomAlert from '@/common/components/CustomAlert';

type MyEditState = { data: UserInterface };

const MyEditPage = () => {
  const { state } = useLocation();
  const { data } = (state ?? {}) as MyEditState;

  const [nickname, setNickname] = useState(data.nickname);
  const [isEdited, setIsEdited] = useState<'main' | 'disabled'>('disabled');
  const [showAlert, setShowAlert] = useState(false);

  const { mutate: updateUser } = usePutUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (nickname !== data.nickname && nickname.length >= 2) {
      setIsEdited('main');
    } else {
      setIsEdited('disabled');
    }
  }, [nickname, data.nickname]);

  const onSave = () => {
    updateUser({ nickname }, { onSuccess: () => navigate(-1) });
  };

  const onNo = () => {
    setShowAlert(false);
  };

  const onYes = () => {
    navigate(-1);
  };

  const onShowAlert = () => {
    console.log(1, isEdited);
    console.log(2, showAlert);

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
          isEdited={isEdited}
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
