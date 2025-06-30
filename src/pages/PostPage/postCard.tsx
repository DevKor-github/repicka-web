import * as s from './style.css';
import { useFlow } from '@/libs/routes/stack';

const PostItem = () => {
  const { push } = useFlow();

  return (
    <div className={s.Container} onClick={() => push('NotFoundPage', {})}>
      게시물... 
    </div>
  );
};

export default PostItem;
