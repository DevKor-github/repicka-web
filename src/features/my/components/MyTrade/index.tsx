import { cx } from '@styled-system/css';
import * as s from './style.css';
import { Link } from 'react-router';

interface MenuProps {
  Title: string;
  Icon: string;
  Addr: string;
}

const Menu = ({ Title, Icon, Addr }: MenuProps) => {
  return (
    <Link className={s.GoMenu} to={Addr}>
      <div className={s.MenuContent}>
        <span className={cx(`${Icon}`)} />
        {Title}
      </div>
      <div className={cx('mgc_right_line', s.Icon)} />
    </Link>
  );
};

const MyTrade = () => {
  return (
    <div className={s.MyTrade}>
      <div className={s.Title}>나의 거래</div>
      <div className={s.Menu}>
        <Menu Icon="mgc_heart_fill" Title="관심 목록" Addr="/liked" />
        {/* TODO: api 나오면 달아주기 */}
        {/* <Menu Icon="mgc_document_fill" Title="최근 본 게시물" Addr="/recent" /> */}
        <Menu Icon="mgc_shopping_bag_1_fill" Title="나의 판매 내역" Addr="/my-trade" />
      </div>
    </div>
  );
};

export default MyTrade;
