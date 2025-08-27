import { cx } from '@styled-system/css';

import * as s from './style.css';

interface Props {
  type: 'search' | '404' | 'like' | 'chat' | 'pick' | 'chat-list' | 'notification';
}
const NoResult = ({ type }: Props) => {
  const icon = type === 'search' ? 'mgc_alert_fill' : 'mgc_puzzled_fill';

  const title = (() => {
    if (type === 'search') return '검색 결과가 없어요!';
    if (type === '404') return '앗, 잘못된 접근이에요!';
    if (type === 'chat') return '아직 시작된 대화가 없어요!';
    if (type === 'chat-list') return '아직 시작된 대화가 없어요!';
    if (type === 'pick') return '아직 생성된 PICK이 없어요!';
    if (type === 'notification') return '아직 알림이 없어요!';
    return '아직 관심목록이 없어요!';
  })();

  const description = (() => {
    if (type === 'search') return '다른 키워드로 다시 검색해 주세요.';
    if (type === '404') return '다른 경로로 접속해 주세요.';
    if (type === 'chat') return '상품에 관심 있는 사람이 나타나면\n채팅을 주고받을 수 있습니다.';
    if (type === 'chat-list') return '채팅을 시작해 보세요.';
    if (type === 'pick') return 'PICK을 생성해 보세요.';
    if (type === 'notification') return 'PICK을 생성해 보세요.';
    return '원하는 상품을 관심목록에 담아 보세요.';
  })();

  return (
    <div className={s.Container}>
      <div className={cx(icon, s.Icon)} role="img" aria-label={type === 'search' ? '알림 아이콘' : '당황 아이콘'} />
      <div className={s.Text}>
        <p>{title}</p>
        <p className={s.Description}>{description}</p>
      </div>
    </div>
  );
};
export default NoResult;
