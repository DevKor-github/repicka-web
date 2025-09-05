import { useEffectOnce } from '@/common/hooks/useEffectOnce';
import { initAmplitude, setInitialUserProperties } from '@/common/utils/amplitude';
import { useGetUser } from '@/features/my/apis/useGetUser';

const AmplitudeProvider = () => {
  const { data: user } = useGetUser();

  useEffectOnce(() => {
    initAmplitude(user?.id.toString(), () => {
      if (user) setInitialUserProperties(user);
    });
  });

  return null;
};

export default AmplitudeProvider;
