import * as s from './style.css';
import { useState } from 'react';

interface InputProps<T extends number | string> {
  className?: string;
  width?: string;
  value: T;
  setValue: (value: T) => void;
}

const InputField = <T extends number | string>({ className, value, setValue }: InputProps<T>) => {
  const [isFocused, setIsFocused] = useState(false);

  const isNumber = typeof value === 'number';
  const stringValue =
    isNumber && value === 0 && isFocused ? '' : isNumber ? (value as number).toLocaleString() : (value as string);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const raw = event.target.value;
    if (isNumber) {
      const number = Number(raw.replace(/,/g, ''));
      if (isNaN(number)) return;
      setValue(number as T);
    } else {
      setValue(raw as T);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (isNumber && e.target.value === '') {
      setValue(0 as T);
    }
  };

  return (
    <input
      className={`${s.Container({ isNumber })} ${className}`}
      value={stringValue}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      inputMode={isNumber ? 'numeric' : 'text'}
      pattern={isNumber ? '[0-9]*' : undefined}
      // style={{ width }}
    />
  );
};

export default InputField;
