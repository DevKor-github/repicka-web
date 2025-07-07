import { useState } from 'react';
import * as s from './style.css';

interface InputProps {
  isPrice?: boolean;
}

const InputField = ({ isPrice = false }: InputProps) => {
  const [price, setPrice] = useState('');

  const handleSetPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    let raw = event.target.value.replace(/,/g, '');

    if (!/^\d*$/.test(raw)) return;     // 숫자가 아니면 무시

    const number = Number(raw);

    if (isNaN(number)) {
      setPrice('');
    } else {
      setPrice(number.toLocaleString('ko-KR'));
    }

    // TODO: 현재 입력값은 string
    // 백엔드에 보낼 때 number로 재변환하기
    // const numericPrice = Number(price.replace(/,/g, ''));
  };
  
  return <input 
  className={s.Container({ isPrice })}
  value={isPrice ? price : undefined}
  onChange={isPrice ? handleSetPrice : undefined}
  inputMode={isPrice ? 'numeric' : 'text'}
  pattern={isPrice ? '[0-9]*' : undefined}
  ></input>;
};

export default InputField;
