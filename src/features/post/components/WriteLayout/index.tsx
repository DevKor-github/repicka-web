import Header from './header';
import Navigator from './navigator';
import Step1 from '@/features/post/components/StepFunnel/Step1';
import Step2 from '@/features/post/components/StepFunnel/Step2';
import Step3 from '@/features/post/components/StepFunnel/Step3';
import Step4 from '@/features/post/components/StepFunnel/Step4';
import Step5 from '@/features/post/components/StepFunnel/Step5';
import Step6 from '@/features/post/components/StepFunnel/Step6';
import { useState } from 'react';

import * as s from './style.css';
import { useStep1Store } from '../../stores/Step1Store';
import { postPost } from '../../hooks/apis/usePostPost';
import { getPresignedUrl } from '../../hooks/apis/useGetPresignedUrl';
import { useStep5Store } from '../../stores/Step5Store';
import { useNavigate } from 'react-router';

const MAX_STEP = 6;

const WriteLayout = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const store = useStep1Store(state => state.transactionTypes);
  const isRental = store.includes('RENTAL');
  const isSale = store.includes('SALE');

  const steps = [<Step1 />, <Step2 />, <Step3 />, <Step4 />, <Step5 />, <Step6 isRental={isRental} isSale={isSale} />];

  const isFirst = step === 1;
  const isLast = step === MAX_STEP;

  const goPrev = () => {
    setStep(prev => Math.max(1, prev - 1)); // 이전 상태 고려 (prev), 최소 1
  };

  const goNext = async () => {
    if (step < MAX_STEP) setStep(step + 1);
    else {
      const files = useStep5Store.getState().files;

      const presignedResults = await Promise.all(files.map(file => getPresignedUrl(file)));

      // fileKeys post로 보내기 (배열)
      const fileKeys = presignedResults.map(result => result.fileKey);
      const presignedUrls = presignedResults.map(result => result.presignedUrl);

      const res = await postPost(fileKeys, files, presignedUrls);

      // if (res.status === 201) {
      //   const itemId = res.data.data.itemId;
      //   navigate(`/detail/${itemId}`);
      // }
    }
  };

  return (
    <div className={s.entireLayout}>
      <Header />
      <div className={s.innerPage}>{steps[step - 1]}</div>
      <div className={s.Navigator}>
        <Navigator
          totalSteps={MAX_STEP}
          currentStep={step}
          goNext={goNext}
          goPrev={goPrev}
          isFirst={isFirst}
          isLast={isLast}
          isRental={isRental}
          isSale={isSale}
        />
      </div>
    </div>
  );
};

export default WriteLayout;
