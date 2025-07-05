import * as s from './style.css';

import TagOptionBtn from '@/common/components/TagOptionBtn';

const Step2 = () => {
  return (
    <div className={s.Container}>
      <TagOptionBtn type='SOCCER'>축구</TagOptionBtn>
      <TagOptionBtn type='BASKETBALL'>농구</TagOptionBtn>
      <TagOptionBtn type='BASEBALL'>야구</TagOptionBtn>
      <TagOptionBtn type='HOCKEY'>하키</TagOptionBtn>
      <TagOptionBtn type='VARSITY_JACKET'>과잠</TagOptionBtn>
      <TagOptionBtn type='SELF_MADE'>자체제작</TagOptionBtn>
      <TagOptionBtn type='ACCESSORY'>악세서리</TagOptionBtn>
      <TagOptionBtn type='VINTAGE'>빈티지</TagOptionBtn>
      <TagOptionBtn type='REFORM'>리폼</TagOptionBtn>
      <TagOptionBtn type='OTHER'>기타</TagOptionBtn>
      <TagOptionBtn type='OTHER' isColorGroup>기타</TagOptionBtn>
      <TagOptionBtn type='XS'>기타</TagOptionBtn>
      <TagOptionBtn type='IVORY'>기타</TagOptionBtn>
    </div>
  );
};

export default Step2;
