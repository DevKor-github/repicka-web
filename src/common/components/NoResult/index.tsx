import { cx } from '@styled-system/css';

import * as s from './style.css';

interface Props {
  type: 'search' | '404';
}
const NoResult = ({ type }: Props) => {
  const icon = type === 'search' ? 'mgc_alert_fill' : 'mgc_puzzled_fill';
  const title = type === 'search' ? '검색 결과가 없어요!' : '앗, 잘못된 접근이에요!';
  const description = type === 'search' ? '다른 키워드로 다시 검색해 주세요.' : '다른 경로로 접속해 주세요.';
  return (
    <div className={s.Container}>
      <div
        className={cx(icon, s.Icon)}
        role="img"
        aria-label={type === 'search' ? '알림 아이콘' : '당황 아이콘'}
      />
      <div className={s.Text}>
        <p>{title}</p>
        <p className={s.Description}>{description}</p>
      </div>
    </div>
  );
};
export default NoResult;
