import { Link, useLocation } from 'react-router';
import * as s from './style.css';
import { NAVIGATOR_HEIGHT_PX } from '@/libs/constants/sizes';

const MENU_LIST = [
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
];

// TODO: 아이콘에도 Transition Animation 추가
const Navigator = () => {
  const { pathname } = useLocation();

  return (
    <nav className={s.Container} style={{ height: `${NAVIGATOR_HEIGHT_PX}px` }}>
      {MENU_LIST.map(({ label, path, selectedClassName, unSelectedClassName }) => {
        const selected = pathname === path;
        return (
          <Link key={path} className={s.Menu({ selected })} to={path}>
            <span className={selected ? selectedClassName : unSelectedClassName} />
            <p>{label}</p>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigator;
