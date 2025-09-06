import { Link, useLocation } from 'react-router';
import * as s from './style.css';
import { NAVIGATION_MENU_LIST } from '@/pages/routes';
import { useUnreadChatStore } from '@/common/store/UnreadChatStore';

// TODO: 아이콘에도 Transition Animation 추가
const Navigator = () => {
  const { pathname } = useLocation();
  const unreadChatCount = useUnreadChatStore(state => state.unreadChatCount);

  return (
    <nav className={s.Container}>
      {NAVIGATION_MENU_LIST.map(({ label, path, selectedClassName, unSelectedClassName }) => {
        const selected = pathname === path;
        const viewUnreadChatCount = label === '채팅' && unreadChatCount > 0;
        return (
          <Link key={path} className={s.Menu({ selected })} to={path}>
            <span className={selected ? selectedClassName : unSelectedClassName} />
            <p>{label}</p>
            {viewUnreadChatCount && <div className={s.UnreadChatCount}>{unreadChatCount}</div>}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigator;
