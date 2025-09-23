import CustomAlert from '@/common/components/CustomAlert';
import { useToast } from '@/common/hooks/useToast';
import { useDeleteUser } from '@/features/my/apis/useDeleteUser';
import { cx } from '@styled-system/css';

import * as s from './style.css';
import { useState } from 'react';

const DeleteAccountButton = () => {
  const { openToast } = useToast();
  const { mutate: deleteUser } = useDeleteUser();
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const handleDelete = () => {
    deleteUser(undefined, {
      onSuccess: () => {
        openToast({ message: '회원탈퇴 완료!' });
      },
    });
  };

  return (
    <>
      <button className={s.GoMenu} onClick={() => setShowDeleteAlert(true)}>
        <div className={s.MenuContent}>
          <span className={cx(`mgc_user_x_fill`)} />
          회원 탈퇴
        </div>
        <div className={cx('mgc_right_line', s.Icon)} />
      </button>
      {showDeleteAlert && (
        <CustomAlert
          title="회원 탈퇴 후 복구가 불가능해요!"
          subTitle="정말 탈퇴하실 건가요?"
          yesBtn="네, 탈퇴할게요"
          onNo={() => setShowDeleteAlert(false)}
          onYes={handleDelete}
        />
      )}
    </>
  );
};
export default DeleteAccountButton;
