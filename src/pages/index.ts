import HomePage from '@/pages/HomePage';
import NotFoundPage from '@/pages/NotFoundPage';
import PostPage from '@/pages/PostPage';

/**
 * 페이지 라우트 추가하고 싶으면 -Page.tsx 파일 만들고
 * 여기에 추가하믄 됨
 */
export const pagesConfig = {
  HomePage: {
    path: '/',
    component: HomePage,
  },
  PostPage: {
    path: '/post',
    component: PostPage,
  },
  NotFoundPage: {
    path: '/404',
    component: NotFoundPage,
  },
};
