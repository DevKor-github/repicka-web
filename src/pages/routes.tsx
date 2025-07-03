import type { RouteObject } from 'react-router';

import HomePage from '@/pages/HomePage';
import Layout from '@/pages/Layout';
import PickPage from '@/pages/PickPage';
import PostPage from '@/pages/PostPage';
import NotFoundPage from '@/pages/NotFoundPage';

/**
 * 새로운 페이지 추가하고 싶으면 여기에 추가하면 됩니다
 */
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/pick',
        element: <PickPage />,
      },
      {
        path: '/post',
        element: <PostPage />,
      },
      {
        path: '*', // 못 찾았을 때 404 페이지로 이동
        element: <NotFoundPage />,
      },
    ],
  },
];

export default routes;
