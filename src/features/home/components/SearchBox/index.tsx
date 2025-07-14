import { useNavigate, useSearchParams } from 'react-router';

import * as s from './style.css';
import { useEffect, useState } from 'react';

const SearchBox = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlKeyword = searchParams.get('keyword');

  const [keyword, setKeyword] = useState(urlKeyword || '');

  useEffect(() => {
    // 뒤로가기 시 keyword 동기화
    setKeyword(urlKeyword || '');
  }, [urlKeyword]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keyword === '') {
      searchParams.delete('keyword');
    } else {
      searchParams.set('keyword', keyword);
    }
    setSearchParams(searchParams);
  };

  return (
    <form className={s.Container} onSubmit={handleSubmit}>
      <button type="button" className={`mgc_left_line ${s.BackButton}`} onClick={() => navigate(-1)} />
      <div className={s.SearchArea}>
        <span className={`mgc_search_2_fill ${s.SearchIcon}`} />
        <input
          className={s.SearchInput}
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          placeholder="상품 및 태그 검색"
        />
      </div>
    </form>
  );
};
export default SearchBox;
