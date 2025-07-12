import type { TextareaHTMLAttributes } from 'react';
import * as s from './style.css';

const MultilineInputfield = (props: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return <textarea className={s.Container} {...props}></textarea>;
};

export default MultilineInputfield;
