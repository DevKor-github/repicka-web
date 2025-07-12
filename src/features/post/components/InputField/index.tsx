import { useEffect, useState } from 'react';
import * as s from './style.css';

interface InputProps {
  isPrice?: boolean;
  width?: string;

  // 외부 상태 연동용
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ isPrice = false, width = '100%', value, onChange }: InputProps) => {
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (isPrice && value) {
      const raw = value.replace(/,/g, ''); // raw는 value에서 ,를 없앤 순수 숫자
      if (/^\d+$/.test(raw)) {
        // raw가 숫자로만 이루어져 있다면
        setPrice(Number(raw).toLocaleString('ko-KR')); // 포맷팅해서 저장하기
      }
    }
  }, [isPrice, value]);

  const handleSetPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const raw = event.target.value.replace(/,/g, '');

    if (!/^\d*$/.test(raw)) return; // 숫자가 아니면 무시

    const number = Number(raw);

    if (isNaN(number)) {
      setPrice(''); // 숫자가 아니면 입력 안 되게
    } else {
      setPrice(number.toLocaleString('ko-KR')); // 숫자면 포맷팅
    }

    if (onChange) {
      // 가공된 값으로 보이게 해주고 상태 저장
      onChange({
        ...event,
        target: {
          ...event.target,
          value: raw,
        },
      });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isPrice) {
      // 가격이라면 포맷팅
      handleSetPrice(event);
    } else {
      // 가격이 아니라면 외부에서 받은 onChange 사용
      onChange?.(event);
    }
  };

  return (
    <input
      className={s.Container({ isPrice })}
      style={{ width: width }}
      value={isPrice ? price : undefined}
      onChange={handleChange}
      inputMode={isPrice ? 'numeric' : 'text'}
      pattern={isPrice ? '[0-9]*' : undefined}
    ></input>
  );
};

export default InputField;
