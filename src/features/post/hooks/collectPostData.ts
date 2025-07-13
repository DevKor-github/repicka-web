// data로 다 모으기

import { useStep1Store } from '../stores/Step1Store';
import { useStep2Store } from '../stores/Step2Store';
import { useStep3Store } from '../stores/Step3Store';
import { useStep4Store } from '../stores/Step4Store';
import { useStep5Store } from '../stores/Step5Store';
import { useRentalStore, useSaleStore } from '../stores/Step6Store';

export const collectPostDate = (fileKeys: string[]) => {
  const step1 = useStep1Store.getState();
  const step2 = useStep2Store.getState();
  const step3 = useStep3Store.getState();
  const step4 = useStep4Store.getState();
  const step5 = useStep5Store.getState();
  const rental = useRentalStore.getState();
  const sale = useSaleStore.getState();

  const data = {
    transactionTypes: step1.transactionTypes,
    productTypes: step2.productTypes,
    title: step5.title,
    description: step5.desc,
    color: step4.color,
    size: step4.size,
    quality: step4.quality,
    rentalFee: rental.rentalFee,
    salePrice: sale.salePrice,
    deposit: rental.deposit,
    location: step3.location,
    tradeMethods: step3.tradeMethods,
    canDeal: sale.canDeal,
    images: fileKeys,
  };

  return data;
};
