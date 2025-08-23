import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

import * as s from './style.css';

import CustomAlert from '@/common/components/CustomAlert';
import Drawer from '@/common/components/Drawer';
import type { DrawerState } from '@/common/hooks/useDrawer';
import { useDeleteItem } from '@/features/detail/apis/useDeleteItem';
import type { ItemDetailInterface } from '../../types';

interface Props {
  drawerState: DrawerState;
  state: ItemDetailInterface;
}
const OptionDrawer = ({ drawerState, state }: Props) => {
  const navigate = useNavigate();
  const { mutate } = useDeleteItem();
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const itemId = state.itemId;

  const deleteItem = () => {
    mutate(itemId, {
      onSuccess: () => {
        navigate(-1);
      },
    });
  };

  return (
    <>
      <Drawer drawerState={drawerState}>
        <div className={s.Container}>
          <Link className={s.Button} to={'/post-edit'} state={state}>
            <span className="mgc_pencil_fill" />
            수정하기
          </Link>
          <div className={s.Divider} />
          <button className={s.Button} onClick={() => setShowDeleteAlert(true)}>
            <span className="mgc_delete_2_fill" />
            삭제하기
          </button>
        </div>
      </Drawer>
      {showDeleteAlert && (
        <CustomAlert
          title="삭제한 글은 다시 볼 수 없어요!"
          subTitle="정말 글을 삭제하실 건가요?"
          yesBtn="네, 삭제할게요"
          onNo={() => setShowDeleteAlert(false)}
          onYes={deleteItem}
        />
      )}
    </>
  );
};
export default OptionDrawer;
