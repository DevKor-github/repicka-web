import Btn from '@/common/components/Button';
import * as s from './style.css';
import { resetAllStores } from '../../stores/StoreReset';
import { useNavigate } from 'react-router';

interface Props {
  onUnshow: () => void;
}

const CustomAlert = ({ onUnshow }: Props) => {
  const navigator = useNavigate();

  const onReset = () => {
    resetAllStores();
    navigator(-1);
  };

  return (
    <div className={s.Filter}>
      <div className={s.Container}>
        <div className={s.Text}>
          <span>지금 그만두면 진행상황이 저장되지 않아요!</span>
          <p>정말 글 작성을 그만두실 건가요?</p>
        </div>
        <div className={s.Btn}>
          <Btn onClick={onUnshow} style={{ flex: '1' }}>
            아니오
          </Btn>
          <Btn mode="main" onClick={onReset} style={{ width: '13.125rem' }}>
            네, 다음에 다시 쓸게요
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default CustomAlert;
