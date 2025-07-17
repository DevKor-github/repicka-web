// data로 다 모으기

import { useStep1Store } from '../stores/Step1Store';
import { useStep2Store } from '../stores/Step2Store';
import { useStep3Store } from '../stores/Step3Store';
import { useStep4Store } from '../stores/Step4Store';
import { useStep5Store } from '../stores/Step5Store';
import { useStep6Store } from '../stores/Step6Store';
import type { PostPayload } from '../types/post';

export const useCollectPostData = () => {
  const step1 = useStep1Store();
  const step2 = useStep2Store();
  const step3 = useStep3Store();
  const step4 = useStep4Store();
  const step5 = useStep5Store();
  const step6 = useStep6Store();

  const data: PostPayload = {
    transactionTypes: step1.transactionTypes,
    productTypes: step2.productTypes,
    title: step5.title,
    description: step5.desc,
    color: step4.color,
    size: step4.size,
    quality: step4.quality,
    rentalFee: step6.rentalFee,
    salePrice: step6.salePrice,
    deposit: step6.deposit,
    location: step3.location,
    tradeMethods: step3.tradeMethods,
    canDeal: step6.canDeal,
  };

  return data;
};
