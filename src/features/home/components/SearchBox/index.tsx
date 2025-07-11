import { useNavigate, useSearchParams } from 'react-router';

import * as s from './style.css';
import { useState } from 'react';

const SearchBox = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(searchParams.get('keyword') || '');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keyword === '') {
      searchParams.delete('keyword');
    } else {
      searchParams.set('keyword', keyword);
    }
    setSearchParams(searchParams, { replace: true });
  };

  return (
    <form className={s.Container} onSubmit={handleSubmit}>
      <button type="button" className={`mgc_left_line ${s.BackButton}`} onClick={() => navigate(-1)} />
      <div className={s.SearchArea}>
        <span className={`mgc_search_2_fill ${s.SearchIcon}`} />
        <input className={s.SearchInput} value={keyword} onChange={e => setKeyword(e.target.value)} />
      </div>
    </form>
  );
};
export default SearchBox;
