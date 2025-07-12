import { useStep1Store } from './Step1store';
import { useStep2Store } from './Step2Store';
import { useStep3Store } from './Step3Store';
import { useStep4Store } from './Step4Store';
import { useStep5Store } from './Step5Store';
import { useRentalStore, useSaleStore } from './Step6Store';

export const useStoreReset = () => {
  useStep1Store.getState().reset();
  useStep2Store.getState().reset();
  useStep3Store.getState().reset();
  useStep4Store.getState().reset();
  useStep5Store.getState().reset();
  useRentalStore.getState().reset();
  useSaleStore.getState().reset();
};
