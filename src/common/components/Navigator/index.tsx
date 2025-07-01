import * as s from './style.css';

import PickIcon from '@/assets/icons/PickIcon';
import HomeIcon from '@/assets/icons/HomeIcon';
import ChatIcon from '@/assets/icons/ChatIcon';
import UserIcon from '@/assets/icons/UserIcon';

// 으아 얘는 Stack 밖에 있는 놈이라 path로 처리해야됨
const MENU_LIST = [
  {
    icon: <HomeIcon />,
    label: '홈',
    path: '/',
  },
  {
    icon: <PickIcon />,
    label: 'PICK',
    path: '/pick',
  },
  {
    icon: <ChatIcon />,
    label: '채팅',
    path: '/chat',
  },
  {
    icon: <UserIcon />,
    label: '마이페이지',
    path: '/my',
  },
];

// 하 근데 이거 url 바꾸는거라 자연스럽게 애니메이션 넣고 싶은데 잘 안되네
// 나중에 react-router도 추가 도입해야될듯...
// TODO: React-Router 도입 후 Transition Animation 추가
const Navigator = () => {
  const pathname = '/' + window.location.pathname.split('/')[2];

  return (
    <nav className={s.Container}>
      {MENU_LIST.map(({ icon, label, path }) => {
        return (
          <a key={path} className={s.Menu({ selected: pathname === path })} href={import.meta.env.VITE_BASE_URL + path}>
            {icon}
            <p>{label}</p>
          </a>
        );
      })}
    </nav>
  );
};

export default Navigator;
