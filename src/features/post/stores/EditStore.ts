import { isEqual } from 'es-toolkit';
import { useStep1Store } from './Step1Store';
import { useStep2Store } from './Step2Store';
import { useStep3Store } from './Step3Store';
import { useStep4Store } from './Step4Store';
import { useStep5Store } from './Step5Store';
import { useStep6Store } from './Step6Store';
import type { ItemDetailInterface } from '@/features/detail/types';

export const SetTotalStore = (state: ItemDetailInterface) => {
  const step1 = useStep1Store.getState();
  const step2 = useStep2Store.getState();
  const step3 = useStep3Store.getState();
  const step4 = useStep4Store.getState();
  const step5 = useStep5Store.getState();
  const step6 = useStep6Store.getState();

  step1.setTransactionTypes(state.itemInfo.transactionTypes);
  step2.setProductTypes(state.itemInfo.productTypes);
  step3.setLocation(state.itemInfo.location);
  step3.setTradeMethods(state.itemInfo.tradeMethods);
  step4.setColor(state.itemInfo.color);
  step4.setQuality(state.itemInfo.quality);
  step4.setSize(state.itemInfo.size);
  step5.setTitle(state.itemInfo.title);
  step5.setDesc(state.itemInfo.description);
  step5.setServerFileKeys(state.itemInfo.images);
  step6.setRentalFee(state.itemInfo.rentalFee);
  step6.setDeposit(state.itemInfo.deposit);
  step6.setSalePrice(state.itemInfo.salePrice);
  step6.setCanDeal(state.itemInfo.canDeal);
};

export const isStoreEqualToState = (state: ItemDetailInterface): boolean => {
  const step1 = useStep1Store.getState();
  const step2 = useStep2Store.getState();
  const step3 = useStep3Store.getState();
  const step4 = useStep4Store.getState();
  const step5 = useStep5Store.getState();
  const step6 = useStep6Store.getState();

  return (
    isEqual(step1.transactionTypes, state.itemInfo.transactionTypes) &&
    isEqual(step2.productTypes, state.itemInfo.productTypes) &&
    isEqual(step3.tradeMethods, state.itemInfo.tradeMethods) &&
    step3.location === state.itemInfo.location &&
    step4.color === state.itemInfo.color &&
    step4.quality === state.itemInfo.quality &&
    step4.size === state.itemInfo.size &&
    step5.desc === state.itemInfo.description &&
    step5.title === state.itemInfo.title &&
    (step5.localFileKeys === null || step5.localFileKeys.length === 0) &&
    isEqual(step5.serverFileKeys, state.itemInfo.images) &&
    step6.canDeal === state.itemInfo.canDeal &&
    step6.deposit === state.itemInfo.deposit &&
    step6.rentalFee === state.itemInfo.rentalFee &&
    step6.salePrice === state.itemInfo.salePrice
  );
};
