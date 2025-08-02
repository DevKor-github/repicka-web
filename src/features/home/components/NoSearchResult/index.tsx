import { cx } from '@styled-system/css';

import * as s from './style.css';

const NoSearchResult = () => {
  return (
    <div className={s.Container}>
      <div className={cx('mgc_alert_fill', s.AlertIcon)} />
      <div className={s.Text}>
        <p>검색 결과가 없어요!</p>
        <p className={s.Description}>다른 키워드로 다시 검색해 주세요.</p>
      </div>
    </div>
  );
};
export default NoSearchResult;
