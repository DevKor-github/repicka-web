import * as s from './style.css';

interface InputProps<T extends number | string> {
  width?: string;

  value: T;
  setValue: (value: T) => void;
}

const InputField = <T extends number | string>({ value, setValue, width }: InputProps<T>) => {
  const isNumber = typeof value === 'number'; // 부모애서 정해준 타입이 number일 때
  const stringValue = isNumber ? (value as number).toLocaleString() : (value as string);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const raw = event.target.value;
    if (isNumber) {
      console.log('step6이당');
      const number = Number(raw.replace(/./g, ''));
      if (isNaN(number)) return;
      setValue(number as T);
    } else {
      console.log('step6 아니다');
      setValue(raw as T);
    }
  };

  return (
    <input
      className={s.Container({ isNumber })}
      value={stringValue}
      onChange={handleChange}
      inputMode={isNumber ? 'numeric' : 'text'}
      pattern={isNumber ? '[0-9]*' : undefined}
      style={{ width: width }}
    ></input>
  );
};

export default InputField;
