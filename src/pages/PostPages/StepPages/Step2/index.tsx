import * as s from './style.css';

import TagOptionBtn from '@/common/components/TagOptionBtn';

const Step2 = () => {
  return (
    <div className={s.Container}>
      <TagOptionBtn type='SOCCER' />
      <TagOptionBtn type='BASKETBALL'/>
      <TagOptionBtn type='BASEBALL'/>
      <TagOptionBtn type='HOCKEY'/>
      <TagOptionBtn type='VARSITY_JACKET'/>
      <TagOptionBtn type='SELF_MADE'/>
      <TagOptionBtn type='ACCESSORY'/>
      <TagOptionBtn type='VINTAGE'/>
      <TagOptionBtn type='REFORM'/>
      <TagOptionBtn type='OTHER'/>
      <TagOptionBtn type='OTHER' isColorOther/>
      <TagOptionBtn type='XS'/>
      <TagOptionBtn type='IVORY'/>
    </div>
  );
};

export default Step2;
