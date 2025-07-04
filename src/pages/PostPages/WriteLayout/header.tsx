import { useNavigate } from 'react-router';
import * as s from './style.css';

const Header = () => {
  const navigator = useNavigate();

  const handleClose = () => {
    navigator(-1);
  };

  return (
    <header>
      <div className={s.Container}>
        <button className={`mgc_close_line ${s.closeBtn}`} onClick={handleClose}></button>
        <span className={s.headerText}> 글쓰기 </span>
      </div>
    </header>
  );
};

export default Header;
