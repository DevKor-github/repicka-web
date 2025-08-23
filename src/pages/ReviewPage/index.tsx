import CustomHeader from '@/common/components/CustomHeader';
import SafeArea from '@/common/components/SafeArea';
import { useNavigate, useParams } from 'react-router';
import * as s from './style.css';
import { useState } from 'react';
import Btn from '@/common/components/Button';
import { usePostReview } from '@/features/review/apis/usePostReview';
import ReviewContent from '@/features/review/components/reviewContent';

const Review = () => {
  const navigate = useNavigate();
  const { mutate: postReview } = usePostReview();
  const { itemId } = useParams();

  const [review, setReview] = useState('');
  const [isStarClicked, setIsStarClicked] = useState([false, false, false, false, false]);
  const rating = isStarClicked.filter(v => v === true).length;

  const isValid = rating !== 0 && review !== '' ? 'main' : 'disabled';

  const handleReview = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const onClick = () => {
    if (isValid === 'main') {
      postReview(
        {
          appointmentId: Number(itemId),
          content: review,
          rating: rating,
        },
        {
          onSuccess: () => {
            navigate(-1);
          },
        },
      );
      alert('후기 작성 완료');
    }
  };

  return (
    <SafeArea>
      <div className={s.Layout}>
        <div>
          <CustomHeader onClick={() => navigate(-1)} title="후기 작성하기" />
          <ReviewContent
            handleReview={handleReview}
            isStarClicked={isStarClicked}
            review={review}
            setIsStarClicked={setIsStarClicked}
          />
        </div>
        <div className={s.Btn}>
          <Btn mode={isValid} onClick={onClick}>
            후기 작성 완료
          </Btn>
        </div>
      </div>
    </SafeArea>
  );
};

export default Review;
