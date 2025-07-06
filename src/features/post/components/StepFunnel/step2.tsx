import Token from '@/common/components/Token';
import * as s from './style.css';

import TagOptionBtn from '@/common/components/TagOptionBtn';

const Step2 = () => {
  return (
    <div>
      <header className={s.Head}>
        제품 타입을 선택해 주세요
        <Token>복수 선택 가능</Token>
      </header>
      <div className={s.Content}>
        <div className={s.Grid}>
          <TagOptionBtn type="SOCCER" />
          <TagOptionBtn type="BASKETBALL" />
          <TagOptionBtn type="BASEBALL" />
          <TagOptionBtn type="HOCKEY" />
          <TagOptionBtn type="VARSITY_JACKET" />
          <TagOptionBtn type="SELF_MADE" />
          <TagOptionBtn type="ACCESSORY" />
          <TagOptionBtn type="VINTAGE" />
          <TagOptionBtn type="REFORM" />
          <TagOptionBtn type="OTHER" />
        </div>
      </div>
    </div>
  );
};

export default Step2;
