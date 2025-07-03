import { Link } from 'react-router';
import * as s from './style.css';

import RepickaTitle from '@/libs/assets/RepickaTitle';

const MainTopBar = () => {
  return (
    <div className={s.Wrapper}>
      <Link className={s.Title} to={'/'}>
        {/* TODO: 실제 로고 넣기 ! */}
        <div className={s.Logo} />
        <RepickaTitle />
      </Link>
      <div className={s.Menu}>
        {/* TODO: 링크 연결하기 */}
        <button className="mgc_search_2_fill" />
        <button className="mgc_chat_3_fill" />
        <button className="mgc_notification_fill" />
      </div>
    </div>
  );
};
export default MainTopBar;
