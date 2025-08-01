import { MAX_PRICE } from '@/libs/constants';
import * as s from './style.css';
import { useState } from 'react';
import { cx } from '@styled-system/css';

interface InputProps<T extends number | string> {
  className?: string;
  value: T;
  setValue: (value: T) => void;
  maxLength?: number;
  placeholder?: string;
}

const InputField = <T extends number | string>({
  className,
  value,
  setValue,
  maxLength,
  placeholder,
}: InputProps<T>) => {
  const [isFocused, setIsFocused] = useState(false);

  const isNumber = typeof value === 'number';
  const stringValue =
    isNumber && value === 0 && isFocused ? '' : isNumber ? (value as number).toLocaleString() : (value as string);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const raw = event.target.value;
    if (isNumber) {
      const number = Number(raw.replace(/,/g, ''));
      if (isNaN(number)) return;
      if (number > MAX_PRICE) return;
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
      className={cx(s.Container({ isNumber }), className, s.ContainerWithPlaceholder)}
      value={stringValue}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      inputMode={isNumber ? 'numeric' : 'text'}
      pattern={isNumber ? '[0-9]*' : undefined}
      maxLength={maxLength}
      placeholder={placeholder}
    />
  );
};

export default InputField;
