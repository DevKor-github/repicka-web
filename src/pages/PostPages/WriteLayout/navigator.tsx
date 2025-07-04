import Btn from '@/common/components/Button';
import * as s from './style.css';

interface NavigatorProps {
  goNext: () => void;
  goPrev: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const Navigator = ({ goNext, goPrev, isFirst, isLast }: NavigatorProps) => {

  const label = isLast ? '완료' : '다음';

  return (
    <footer>
      <div className={s.stepBtn}>
        {!isFirst && (
          <Btn onClick={goPrev} style={{ flex: '1 1 0' }}>
            이전
          </Btn>
        )}
        <Btn onClick={goNext} color="main" style={isFirst ? { width: '100%' } : { flex: '1 1 0' }}>
          {label}
        </Btn>
      </div>
    </footer>
  );
};

export default Navigator;
