import type { TextareaHTMLAttributes } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import * as s from './style.css';

const MultilineInputfield = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <div className={s.Container}>
      <TextareaAutosize
        minRows={2}
        onChange={props.onChange}
        maxLength={props.maxLength}
        value={props.value}
        placeholder={props.placeholder}
        className={s.InputField}
        maxRows={4}
      />
      <div className={s.MaxLength}>
        ({typeof props.value === 'string' ? props.value.length : 0}/{props.maxLength})
      </div>
    </div>
  );
};

export default MultilineInputfield;
