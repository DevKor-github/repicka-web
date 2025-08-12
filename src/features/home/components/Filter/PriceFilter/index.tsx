import { MAX_PRICE } from '@/libs/constants';
import { useSearchParams } from 'react-router';

import * as s from './style.css';
import { useMemo } from 'react';
import PriceButton from '@/features/home/components/Filter/PriceFilter/PriceButton';
import CustomPriceInput from '@/features/home/components/Filter/PriceFilter/CustomPriceInput';

const PriceOptions = [
  {
    label: '1만원 미만',
    start: 0,
    end: 9999,
  },
  {
    label: '1만원 - 2만원',
    start: 10000,
    end: 19999,
  },
  {
    label: '2만원 - 3만원',
    start: 20000,
    end: 29999,
  },
  {
    label: '3만원 - 4만원',
    start: 30000,
    end: 39999,
  },
  {
    label: '4만원 - 5만원',
    start: 40000,
    end: 49999,
  },
  { label: '5만원 이상', start: 50000, end: MAX_PRICE },
];

const PriceFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const startPrice = Number(searchParams.get('start-price') || 0);
  const endPrice = Number(searchParams.get('end-price') || MAX_PRICE);

  const resetPrice = () => {
    setSearchParams(prev => {
      prev.delete('start-price');
      prev.delete('end-price');
      return prev;
    });
  };

  const handlePriceChange = (start: number, end: number) => {
    setSearchParams(prev => {
      prev.set('start-price', start.toString());
      prev.set('end-price', end.toString());
      return prev;
    });
  };

  const isCustomPrice = useMemo(() => {
    return (
      searchParams.get('start-price') !== null &&
      searchParams.get('end-price') !== null &&
      !PriceOptions.some(option => option.start === startPrice && option.end === endPrice)
    );
  }, [searchParams, startPrice, endPrice]);

  return (
    <div className={s.Container}>
      <div className={s.PriceWrapper}>
        {PriceOptions.map(option => {
          const isSelected = option.start === startPrice && option.end === endPrice;
          return (
            <PriceButton
              key={option.start}
              isSelected={isSelected}
              onClick={() => {
                if (isSelected) {
                  resetPrice();
                  return;
                }
                handlePriceChange(option.start, option.end);
              }}
              label={option.label}
            />
          );
        })}
        <PriceButton
          isSelected={isCustomPrice}
          onClick={() => {
            if (isCustomPrice) {
              resetPrice();
              return;
            }
            handlePriceChange(0, MAX_PRICE);
          }}
          label="직접 입력"
        />
      </div>
      <CustomPriceInput active={isCustomPrice} />
    </div>
  );
};
export default PriceFilter;
