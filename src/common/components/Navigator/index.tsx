import { Link, useLocation } from 'react-router';
import * as s from './style.css';
import { NAVIGATION_MENU_LIST } from '@/pages/routes';

// TODO: 아이콘에도 Transition Animation 추가
const Navigator = () => {
  const { pathname } = useLocation();

  return (
    <nav className={s.Container}>
      {NAVIGATION_MENU_LIST.map(({ label, path, selectedClassName, unSelectedClassName }) => {
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
