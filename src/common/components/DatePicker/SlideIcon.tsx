import * as s from './style.css';

interface Props {
  direction: 'left' | 'right';
}
const SlideIcon = ({ direction }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="7"
      fill="none"
      viewBox="0 0 6 7"
      className={s.Icon({ direction })}
    >
      <path
        fill="#fff"
        fillOpacity="0.54"
        d="M.695 4.366a1 1 0 0 1 0-1.732L4.3.554a1 1 0 0 1 1.5.866v4.16a1 1 0 0 1-1.5.867z"
      ></path>
    </svg>
  );
};
export default SlideIcon;
