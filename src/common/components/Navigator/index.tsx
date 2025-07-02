import * as s from './style.css';

// 으아 얘는 Stack 밖에 있는 놈이라 path로 처리해야됨
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

// 하 근데 이거 url 바꾸는거라 자연스럽게 애니메이션 넣고 싶은데 잘 안되네
// 나중에 react-router도 추가 도입해야될듯...
// TODO: React-Router 도입 후 Transition Animation 추가
const Navigator = () => {
  const pathname = '/' + window.location.pathname.split('/')[2];

  return (
    <nav className={s.Container}>
      {MENU_LIST.map(({ label, path, selectedClassName, unSelectedClassName }) => {
        const selected = pathname === path;
        return (
          <a key={path} className={s.Menu({ selected })} href={import.meta.env.VITE_BASE_URL + path}>
            <span className={selected ? selectedClassName : unSelectedClassName} />
            <p>{label}</p>
          </a>
        );
      })}
    </nav>
  );
};

export default Navigator;
