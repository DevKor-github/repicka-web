import Btn from '@/common/components/Button';
import * as s from './style.css';

interface Props {
  onNo: () => void;
  onYes: () => void;
  Title: string;
  subTitle: string;
  yesBtn: string;
}

const CustomAlert = ({ onNo, onYes, Title, subTitle, yesBtn }: Props) => {
  return (
    <div className={s.Filter}>
      <div className={s.Container}>
        <div className={s.Text}>
          <span>{Title}</span>
          <p>{subTitle}</p>
        </div>
        <div className={s.Btn}>
          <Btn onClick={onNo} style={{ flex: '1' }}>
            아니오
          </Btn>
          <Btn mode="main" onClick={onYes} style={{ width: '13.125rem' }}>
            {yesBtn}
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default CustomAlert;
