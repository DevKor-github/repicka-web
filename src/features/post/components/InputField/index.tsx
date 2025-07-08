import { useEffect, useState, type PropsWithChildren } from 'react';
import * as s from './style.css';

interface InputProps extends PropsWithChildren {
  isPrice?: boolean;
  width?: string;

  // 외부 상태 연동
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ isPrice = false, width = '100%', value, onChange }: InputProps) => {
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (isPrice && value) {
      const raw = value.replace(/,/g, '');
      if (/^\d+$/.test(raw)) {
        setPrice(Number(raw).toLocaleString('ko-KR'));
      }
    }
  });

  const handleSetPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const raw = event.target.value.replace(/,/g, '');

    if (!/^\d*$/.test(raw)) return; // 숫자가 아니면 무시

    const number = Number(raw);

    if (isNaN(number)) {
      setPrice('');
    } else {
      setPrice(number.toLocaleString('ko-KR'));
    }

    if (onChange) {
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
      handleSetPrice(event);
    } else {
      onChange?.(event);
    }
  };

  return (
    <input
      className={s.Container({ isPrice })}
      style={{ width: width }}
      value={isPrice ? price : value}
      onChange={handleChange}
      inputMode={isPrice ? 'numeric' : 'text'}
      pattern={isPrice ? '[0-9]*' : undefined}
    ></input>
  );
};

export default InputField;
