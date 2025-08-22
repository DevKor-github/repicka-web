import SafeArea from '@/common/components/SafeArea';
import { useParams } from 'react-router';

const PostPick = () => {
  const { id, type, method } = useParams();

  return (
    <SafeArea>
      {id} 아이템에 대한 {type} 요청, {method}
    </SafeArea>
  );
};
export default PostPick;
