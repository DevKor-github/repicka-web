import { useEffectOnce } from '@/common/hooks/useEffectOnce';
import { initAmplitude, setInitialUserProperties } from '@/common/utils/amplitude';
import { useGetUser } from '@/features/my/apis/useGetUser';
import { VERSION_NAME } from '@/libs/constants';

const AmplitudeProvider = () => {
  const { data: user } = useGetUser();

  useEffectOnce(() => {
    console.log(VERSION_NAME);
    initAmplitude(user?.id.toString(), () => {
      if (user) setInitialUserProperties(user);
    });
  });

  return null;
};

export default AmplitudeProvider;
