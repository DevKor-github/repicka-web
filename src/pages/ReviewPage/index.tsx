import CustomHeader from '@/common/components/CustomHeader';
import SafeArea from '@/common/components/SafeArea';
import { useLocation, useNavigate, useParams } from 'react-router';
import * as s from './style.css';
import { useState } from 'react';
import Btn from '@/common/components/Button';
import { usePostReview } from '@/features/review/apis/usePostReview';
import ReviewContent from '@/features/review/components/reviewContent';
import { useToast } from '@/common/hooks/useToast';

const Review = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { openToast } = useToast();

  const { mutate: postReview } = usePostReview();
  const { appointmentId } = useParams();

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
          appointmentId: Number(appointmentId),
          content: review,
          rating: rating,
        },
        {
          onSuccess: () => {
            openToast({ message: '후기 작성 완료!' });
            navigate(-1);
          },
        },
      );
    }
  };

  return (
    <SafeArea>
      <div className={s.Layout}>
        <div className={s.Wrapper}>
          <CustomHeader onClick={() => navigate(-1)} title="후기 작성하기" />
          <ReviewContent
            handleReview={handleReview}
            isStarClicked={isStarClicked}
            review={review}
            setIsStarClicked={setIsStarClicked}
            nickname={location.state.nickname}
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
