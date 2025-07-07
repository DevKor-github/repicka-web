// 아 판매인지, 대여인지, 판매 및 대여인지 구분해서

import Token from '@/common/components/Token';
import * as s from './style.css';
import InputField from '../InputField';
import CheckBtn from '../CheckBtn';
import { useState } from 'react';

const Rental = () => {
  return (
    <div className={s.PriceContent}>
      <div className={s.TokenContainer}>
        <Token>대여</Token>
      </div>
      <div className={s.HeaderInputField}>
        <span>대여료를 입력해 주세요</span>
        <div className={s.PriceInputField}>
          <InputField isPrice={true} />원
        </div>
      </div>
      <div className={s.HeaderInputField}>
        <span>보증금을 입력해 주세요</span>
        <div className={s.PriceInputField}>
          <InputField isPrice={true} />원
        </div>
      </div>
    </div>
  );
};

const Sale = () => {
  const [canDeal, setCanDeal] = useState(false);

  const handleCanDeal = () => {
    setCanDeal(prev => !prev);
  };

  return (
    <div className={s.PriceContent}>
      <div className={s.TokenContainer}>
        <Token>판매</Token>
      </div>
      <div className={s.HeaderInputField}>
        <span>판매 금액을 입력해 주세요</span>
        <div className={s.PriceInputField}>
          <InputField isPrice={true}/>원
        </div>
      </div>
      <span className={s.CanDeal} onClick={handleCanDeal}>
        네고 제안 받을래요
        <CheckBtn isSelected={canDeal} />
      </span>
    </div>
  );
};

const Step6 = () => {
  return (
    <div>
      <header className={s.Head}>가격을 설정해 주세요</header>
      <div className={s.Content}>
        <Rental />
        <Sale />
      </div>
    </div>
  );
};
export default Step6;
