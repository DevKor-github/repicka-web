import { useEffectOnce } from '@/common/hooks/useEffectOnce';
import { VERSION_NAME } from '@/libs/constants';

const useVersionName = () => {
  useEffectOnce(() => {
    console.log(VERSION_NAME);
  });
};
export default useVersionName;
