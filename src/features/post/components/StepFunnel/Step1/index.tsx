import * as s from './style.css';
import * as c from '../style.css';
import TypeCard from '../../TypeCard';
import type { PostType } from '@/libs/types/post';
import Token from '@/common/components/Token';
import { usePostWriteStore } from '@/features/post/stores/postWriteStore';

const Step1 = () => {
  // zustand에 저장되어 있는 현재 상태 가져오기
  const currnetPostTypes = usePostWriteStore(state => state.postTypes);

  // setter 함수 가져오기 (zustand 상태 바꾸기)
  const setPostTypes = usePostWriteStore(state => state.setPostTypes);

  const handleSelectType = (type: PostType) => {
    const updated = currnetPostTypes.includes(type)
      ? currnetPostTypes.filter(t => t !== type)
      : [...currnetPostTypes, type];

    setPostTypes(updated); // zustand에 저장
  };

  return (
    <div className={s.Wrapper}>
      <h1 className={c.Head}>
        거래하실 종류를 선택해 주세요
        <Token>복수 선택 가능</Token>
      </h1>
      <div className={s.Container}>
        <TypeCard
          types="RENTAL"
          isSelected={currnetPostTypes.includes('RENTAL')}
          onClick={() => handleSelectType('RENTAL')}
        />
        <TypeCard
          types="SALE"
          isSelected={currnetPostTypes.includes('SALE')}
          onClick={() => handleSelectType('SALE')}
        />
      </div>
    </div>
  );
};

export default Step1;
