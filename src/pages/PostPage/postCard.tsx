import { useNavigate } from 'react-router';

import * as s from './style.css';

const PostItem = () => {
  const navigate = useNavigate();

  return (
    <div className={s.Container} onClick={() => navigate(`/post/{id}`)}>
      게시물...
    </div>
  );
};

export default PostItem;
