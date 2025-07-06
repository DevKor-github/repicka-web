// 리액트 쿼리 훅?
import { useMutation } from '@tanstack/react-query'; //  보내는 거니까 useMutation
import { postItem } from './apis/usePostPost';

export const usePostItem = () => {
  return useMutation({
    mutationFn: postItem,
  });
};
