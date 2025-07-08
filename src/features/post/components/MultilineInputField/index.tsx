import * as s from './style.css';

interface Props {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MultilineInputfield = ({ value, onChange }: Props) => {
  return <textarea className={s.Container} onChange={onChange} value={value}></textarea>;
};

export default MultilineInputfield;
