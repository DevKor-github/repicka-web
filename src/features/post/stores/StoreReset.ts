import { useStep1Store } from './Step1Store';
import { useStep2Store } from './Step2Store';
import { useStep3Store } from './Step3Store';
import { useStep4Store } from './Step4Store';
import { useStep5Store } from './Step5Store';
import { useStep6Store } from './Step6Store';

export const resetAllStores = () => {
  useStep1Store.getState().reset();
  useStep2Store.getState().reset();
  useStep3Store.getState().reset();
  useStep4Store.getState().reset();
  useStep5Store.getState().reset();
  useStep6Store.getState().reset();
};
