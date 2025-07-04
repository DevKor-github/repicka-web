import * as s from './style.css';

import TagOptionBtn from '@/common/components/TagOptionBtn';

const Step2 = () => {
  return (
    <div className={s.Container}>
      <TagOptionBtn isSelected>축구</TagOptionBtn>
      <TagOptionBtn >농구</TagOptionBtn>
      <TagOptionBtn>야구</TagOptionBtn>
      <TagOptionBtn>하키</TagOptionBtn>
      <TagOptionBtn>과잠</TagOptionBtn>
      <TagOptionBtn>자체제작</TagOptionBtn>
      <TagOptionBtn>악세서리</TagOptionBtn>
      <TagOptionBtn>빈티지</TagOptionBtn>
      <TagOptionBtn>리폼</TagOptionBtn>
      <TagOptionBtn>기타</TagOptionBtn>
    </div>
  );
};

export default Step2;
