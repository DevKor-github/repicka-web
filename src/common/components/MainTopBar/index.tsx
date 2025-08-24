import { Link } from 'react-router';
import * as s from './style.css';

import RepickaTitle from '@/libs/assets/RepickaTitle';
import RepickaLogo from '@/libs/assets/RepickaLogo';

const MainTopBar = () => {
  return (
    <div className={s.Wrapper}>
      <Link className={s.Title} to={'/'}>
        <span className={s.LogoContainer}>
          <RepickaLogo />
        </span>
        <RepickaTitle />
      </Link>
      <div className={s.Menu}>
        <Link className="mgc_search_2_fill" to={'/search'} />
        <button className="mgc_notification_fill" />
      </div>
    </div>
  );
};
export default MainTopBar;
