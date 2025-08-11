import { cx } from '@styled-system/css';
import * as s from './style.css';

interface MenuProps {
  Title: string;
  Icon: string;
}

const Menu = ({ Title, Icon }: MenuProps) => {
  return (
    <div className={s.GoMenu}>
      <div className={s.MenuContent}>
        <span className={cx(`${Icon}`)} />
        {Title}
      </div>
      <div className={cx('mgc_right_line', s.Icon)} />
    </div>
  );
};

const MyTrade = () => {
  return (
    <div className={s.MyTrade}>
      <div className={s.Title}>나의 거래</div>
      <div className={s.Menu}>
        <Menu Icon="mgc_heart_fill" Title="관심 목록" />
        <Menu Icon="mgc_document_fill" Title="최근 본 게시물" />
        <Menu Icon="mgc_shopping_bag_1_fill" Title="나의 판매 내역" />
      </div>
    </div>
  );
};

export default MyTrade;
