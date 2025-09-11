import { cx } from '@styled-system/css';
import * as s from './style.css';
import { Link } from 'react-router';
import { usePostLogout } from '../../apis/usePostLogout';
import { useToast } from '@/common/hooks/useToast';
import { REPICKA_INSTAGRAM } from '@/libs/constants';

interface MenuProps {
  Title: string;
  Icon: string;
  Addr: string;
  Link?: string;
}

const Menu = ({ Title, Icon, Addr }: MenuProps) => {
  const { mutate: postLogout } = usePostLogout();
  const { openToast } = useToast();

  if (Title === '문의하기') {
    return (
      <a href={REPICKA_INSTAGRAM} target="_blank" rel="noopener noreferrer" className={s.GoMenu}>
        <div className={s.MenuContent}>
          <span className={cx(`${Icon}`)} />
          {Title}
        </div>
        <div className={cx('mgc_right_line', s.Icon)} />
      </a>
    );
  }

  if (Title !== '로그아웃') {
    return (
      <Link className={s.GoMenu} to={Addr}>
        <div className={s.MenuContent}>
          <span className={cx(`${Icon}`)} />
          {Title}
        </div>
        <div className={cx('mgc_right_line', s.Icon)} />
      </Link>
    );
  }

  return (
    <button
      className={s.GoMenu}
      onClick={() => {
        postLogout(undefined, {
          onSuccess: () => {
            openToast({ message: '로그아웃 완료!' });
          },
        });
      }}
    >
      <div className={s.MenuContent}>
        <span className={cx(`${Icon}`)} />
        {Title}
      </div>
      <div className={cx('mgc_right_line', s.Icon)} />
    </button>
  );
};

const MyTrade = () => {
  return (
    <div className={s.MyTrade}>
      <div className={s.Title}>나의 거래</div>
      <div className={s.Menu}>
        <Menu Icon="mgc_heart_fill" Title="관심 목록" Addr="/liked" />
        <Menu Icon="mgc_shopping_bag_1_fill" Title="나의 판매 내역" Addr="/my-trade" />
        <Menu Icon="mgc_instagram_line" Title="문의하기" Addr="/my-trade" />
        <Menu Icon="mgc_exit_fill" Title="로그아웃" Addr="/my-trade" />
      </div>
    </div>
  );
};

export default MyTrade;
