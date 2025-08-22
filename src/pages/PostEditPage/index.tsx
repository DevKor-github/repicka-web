import WriteLayout from '@/features/post/components/WriteLayout';
import SafeArea from '@/common/components/SafeArea';
import { useLocation } from 'react-router';

type PostEditState = { itemId: number };

const PostEdit = () => {
  const { state } = useLocation();
  const { itemId } = (state ?? {}) as PostEditState;

  return (
    <SafeArea>
      <WriteLayout postState={state} itemId={itemId} isEdit />
    </SafeArea>
  );
};

export default PostEdit;
