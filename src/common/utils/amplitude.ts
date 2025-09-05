import type { UserInterface } from '@/libs/types/user';
import { identify, Identify, init, setUserId } from '@amplitude/analytics-browser';

const AMPLITUDE_API_KEY = import.meta.env.VITE_API_AMPLITUDE_API_KEY || '';

export const initAmplitude = async (userId?: string, callback?: () => void) => {
  init(AMPLITUDE_API_KEY, {
    userId,
    defaultTracking: true,
    autocapture: {
      elementInteractions: true,
    },
  }).promise.then(() => {
    callback?.();
  });
};

export const setInitialUserProperties = (user: UserInterface) => {
  const identifyObj = new Identify();
  setUserId('repicka-' + user.id);
  identifyObj.set('id', user.id);
  identifyObj.set('user_name', user.nickname);
  identifyObj.set('isKorean', user.isKoreanUnivVerified);
  identifyObj.set('gender', user.gender ?? 'unknown');
  identifyObj.set('height', user.height ?? 'unknown');
  identifyObj.set('weight', user.weight ?? 'unknown');
  identify(identifyObj);
};
