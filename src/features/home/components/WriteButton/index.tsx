import * as s from './style.css';

interface Props {
  onClick: () => void;
}
const WriteButton = ({ onClick }: Props) => {
  return (
    <button className={s.Container} onClick={onClick}>
      <span className={`mgc_add_line`} />
      <p>상품 등록</p>
    </button>
  );
};
export default WriteButton;
