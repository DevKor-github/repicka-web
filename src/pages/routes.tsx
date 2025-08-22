import type { RouteObject } from 'react-router';

import HomePage from '@/pages/HomePage';
import Layout from '@/pages/Layout';
import PickPage from '@/pages/PickPage';
import PostPage from '@/pages/PostPages';
import NotFoundPage from '@/pages/NotFoundPage';
import DetailPage from '@/pages/DetailPage';
import LoginPage from '@/pages/LoginPage';
import ChatPage from './ChatPage';
import ChatRoomPage from './ChatRoomPage';
import AuthGuard from '@/common/components/AuthGuard';
import SearchPage from '@/pages/SearchPage';
import MyPage from './MyPage';
import MyEditPage from './MyEditPage';
import LikedPage from './LikedListPage';
import PostEdit from './PostEditPage';
import ItemChatPage from './ItemChatPage';
import Review from './ReviewPage';
import PostPickPage from '@/pages/PostPickPage';

/**
 * 새로운 페이지 추가하고 싶으면 여기에 추가하면 됩니다
 */
const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/detail/:id',
        element: <DetailPage />,
      },
      {
        path: '/login', // TODO: 임시
        element: <LoginPage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
      {
        element: <AuthGuard />, // 로그인 해야만 들어갈 수 있는 페이지는 이 아래다가 넣어주셈
        children: [
          {
            path: '/pick',
            element: <PickPage />,
          },
          {
            path: '/post',
            element: <PostPage />,
          },
          {
            path: '/chat',
            element: <ChatPage />,
          },
          {
            path: '/chatroom/:chatRoomId',
            element: <ChatRoomPage />,
          },
          {
            path: '/my',
            element: <MyPage />,
          },
          {
            path: '/my-edit',
            element: <MyEditPage />,
          },
          {
            path: 'liked',
            element: <LikedPage />,
          },
          {
            path: 'post-edit',
            element: <PostEdit />,
          },
          {
            path: 'chat-about/:itemId',
            element: <ItemChatPage />,
          },
          {
            path: 'review',
            element: <Review />,
          },
          {
            path: '/post-pick/:id/:type/:method',
            element: <PostPickPage />,
          },
        ],
      },
      {
        path: '*', // 못 찾았을 때 404 페이지로 이동
        element: <NotFoundPage />,
      },
    ],
  },
];

export const NAVIGATION_MENU_LIST = [
  {
    selectedClassName: 'mgc_home_1_fill',
    unSelectedClassName: 'mgc_home_1_line',
    label: '홈',
    path: '/',
  },
  {
    selectedClassName: 'mgc_choice_fill',
    unSelectedClassName: 'mgc_choice_line',
    label: 'PICK',
    path: '/pick',
  },
  {
    selectedClassName: 'mgc_chat_1_fill',
    unSelectedClassName: 'mgc_chat_1_line',
    label: '채팅',
    path: '/chat',
  },
  {
    selectedClassName: 'mgc_user_2_fill',
    unSelectedClassName: 'mgc_user_2_line',
    label: '마이페이지',
    path: '/my',
  },
] as const;

// 네비게이션 더 보여주고 싶은 페이지 있으면 여기 추가
export const SHOW_NAV_PATH = [...NAVIGATION_MENU_LIST.map(menu => menu.path), '/search'];

export default routes;
