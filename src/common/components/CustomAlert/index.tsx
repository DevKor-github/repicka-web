import Btn from '@/common/components/Button';
import * as s from './style.css';

interface Props {
  onUnshow: () => void;
  onYes: () => void;
  Title: string;
  subTitle: string;
  yesBtn: string;
}

const CustomAlert = ({ onUnshow, onYes, Title, subTitle, yesBtn }: Props) => {
  const onClick = () => {
    onYes();
  };

  return (
    <div className={s.Filter}>
      <div className={s.Container}>
        <div className={s.Text}>
          <span>{Title}</span>
          <p>{subTitle}</p>
        </div>
        <div className={s.Btn}>
          <Btn onClick={onUnshow} style={{ flex: '1' }}>
            아니오
          </Btn>
          <Btn mode="main" onClick={onClick} style={{ width: '13.125rem' }}>
            {yesBtn}
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default CustomAlert;
