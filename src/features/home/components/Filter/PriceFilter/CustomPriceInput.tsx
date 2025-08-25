import { useEffect, useState } from 'react';
import * as s from './style.css';
import { MAX_PRICE } from '@/libs/constants';
import { useSearchParams } from 'react-router';
import { useToast } from '@/common/hooks/useToast';

interface Props {
  active: boolean;
}
const CustomPriceInput = ({ active }: Props) => {
  const { openToast } = useToast();
  const [searchParams, setSearchParams] = useSearchParams();

  const defaultStartPrice = searchParams.get('start-price') ? Number(searchParams.get('start-price')) : NaN;
  const defaultEndPrice = searchParams.get('end-price') ? Number(searchParams.get('end-price')) : NaN;

  const [startPrice, setStartPrice] = useState<number>(defaultStartPrice);
  const [endPrice, setEndPrice] = useState<number>(defaultEndPrice);

  useEffect(() => {
    if (!active) {
      setStartPrice(NaN);
      setEndPrice(NaN);
    }
  }, [active]);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'start' | 'end') => {
    const handlePrice = type === 'start' ? setStartPrice : setEndPrice;
    const value = e.target.value;
    // 빈 문자열이면 NaN으로 설정
    if (value === '') {
      handlePrice(NaN);
      return;
    }
    // 숫자가 아니거나 0으로 시작하는 경우 (단, '0' 자체는 허용) 무시
    if (!/^\d+$/.test(value) || (value.length > 1 && value.startsWith('0'))) {
      return;
    }
    const numValue = Number(value);
    if (numValue > MAX_PRICE) return;
    handlePrice(numValue);
  };

  const submitPrice = () => {
    if (isNaN(startPrice) || isNaN(endPrice)) return;
    if (startPrice > endPrice) {
      openToast({ message: '시작 가격이 끝 가격보다 클 수 없습니다.' });
      return;
    }
    setSearchParams(prev => {
      prev.set('start-price', startPrice.toString());
      prev.set('end-price', endPrice.toString());
      return prev;
    });
  };

  return (
    <div className={s.CustomPriceInputContainer({ active })}>
      <div className={s.CustomPriceInput}>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={isNaN(startPrice) ? '' : startPrice.toString()}
          onChange={e => handlePriceChange(e, 'start')}
          disabled={!active}
          onBlur={submitPrice}
        />
        <span>원</span>
      </div>
      <span>-</span>
      <div className={s.CustomPriceInput}>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          value={isNaN(endPrice) ? '' : endPrice.toString()}
          onChange={e => handlePriceChange(e, 'end')}
          disabled={!active}
          onBlur={submitPrice}
        />
        <span>원</span>
      </div>
    </div>
  );
};
export default CustomPriceInput;
