// 만약 isEdit라면
// state 받아서 store에 넣어 주기
// store에서 edit 초기 상태 따로 만들기
// 근데 이제 상품을 수정할 때에는 초기 상태가 이미 정해져 있음...

import Header from './header';
import Navigator from './navigator';
import Step1 from '@/features/post/components/StepFunnel/Step1';
import Step2 from '@/features/post/components/StepFunnel/Step2';
import Step3 from '@/features/post/components/StepFunnel/Step3';
import Step4 from '@/features/post/components/StepFunnel/Step4';
import Step5 from '@/features/post/components/StepFunnel/Step5';
import Step6 from '@/features/post/components/StepFunnel/Step6';
import { useEffect, useState } from 'react';

import * as s from './style.css';
import { usePostItem } from '../../apis/usePostItem';
import { useStep5Store } from '../../stores/Step5Store';
import { useNavigate } from 'react-router';
import { resetAllStores } from '../../stores/StoreReset';
import { useCollectPostData } from '../../hooks/useCollectPostData';
import { SetTotalStore } from '../../stores/EditStore';
import type { ItemDetailInterface } from '@/features/detail/types';
import { usePutItem } from '../../apis/usePutItem';

interface Props {
  postState?: ItemDetailInterface;
  itemId?: number;
  isEdit?: boolean;
}

export const MAX_STEP = 6;

const WriteLayout = ({ postState, itemId, isEdit }: Props) => {
  const [step, setStep] = useState(1);

  const { mutate: postItem } = usePostItem();
  const { mutate: putItem } = usePutItem();

  const navigate = useNavigate();
  const data = useCollectPostData();
  const files = useStep5Store(state => state.file);
  const localFileKeys = useStep5Store(state => state.localFileKeys);
  const serverFileKeys = useStep5Store(state => state.serverFileKeys);
  const presignedUrls = useStep5Store(state => state.presignedUrl);

  const isFirst = step === 1;
  const isLast = step === MAX_STEP;

  const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />, <Step5 />, <Step6 />];

  useEffect(() => {
    if (isEdit && postState) {
      SetTotalStore(postState);
    }
  }, [isEdit, postState]);

  const goPrev = () => {
    setStep(prev => Math.max(1, prev - 1));
  };

  const goNext = () => {
    if (step < MAX_STEP) setStep(step + 1);
    else {
      if (isEdit && itemId) {
        putItem(
          {
            data,
            files,
            presignedUrls,
            localFileKeys,
            serverFileKeys,
            itemId,
          },
          {
            onSuccess: res => {
              const itemId = res.data.itemId;
              resetAllStores();
              navigate(`/detail/${itemId}`, { replace: true });
            },
          },
        );
        return;
      }

      postItem(
        { data, fileKeys: localFileKeys, files, presignedUrls },
        {
          onSuccess: res => {
            const itemId = res.data.itemId;
            resetAllStores();
            navigate(`/detail/${itemId}`, { replace: true });
          },
        },
      );
    }
  };

  return (
    <div className={s.entireLayout}>
      <Header postState={postState} />
      <div className={s.innerPage}>{steps[step - 1]}</div>
      <div className={s.Navigator}>
        <Navigator
          totalSteps={MAX_STEP}
          currentStep={step}
          goNext={goNext}
          goPrev={goPrev}
          isFirst={isFirst}
          isLast={isLast}
          postState={postState}
        />
      </div>
    </div>
  );
};

export default WriteLayout;
