import MultilineInputfield from '@/features/post/components/MultilineInputField';
import * as s from './style.css';
import { MAX_REVIEW } from '@/libs/constants';
import { cx } from '@styled-system/css';

interface Props {
  isStarClicked: boolean[];
  setIsStarClicked: React.Dispatch<React.SetStateAction<boolean[]>>;
  review: string;
  handleReview: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  nickname: string;
}

const ReviewContent = ({ handleReview, isStarClicked, review, setIsStarClicked, nickname }: Props) => {
  return (
    <div className={s.Wrapper}>
      <div className={s.Content}>
        <p>{nickname} 님과의 거래를 평가해 주세요</p>
        <div className={s.StarContainer}>
          {isStarClicked.map((star, idx) => {
            return (
              <div
                key={idx}
                className={cx(star ? 'mgc_star_fill' : 'mgc_star_line', s.Star({ star }))}
                onClick={() => setIsStarClicked(prev => prev.map((_, i) => i <= idx))}
              />
            );
          })}
        </div>
      </div>
      <div className={s.Content}>
        <p>{nickname} 님과의 거래는 어떠셨나요?</p>
        <MultilineInputfield
          placeholder={'배송, 제품 상태, 채팅 등 상품거래와 관련된 내용을 최대 500자 이내로 작성해 주세요.'}
          maxLength={MAX_REVIEW}
          value={review}
          onChange={handleReview}
        />
      </div>
    </div>
  );
};

export default ReviewContent;
