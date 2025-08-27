import CustomHeader from '@/common/components/CustomHeader';
import SafeArea from '@/common/components/SafeArea';
import { useLocation, useNavigate, useParams } from 'react-router';
import * as s from './style.css';
import { useState } from 'react';
import Btn from '@/common/components/Button';
import { usePostReview } from '@/features/review/apis/usePostReview';
import ReviewContent from '@/features/review/components/reviewContent';
import { useToast } from '@/common/hooks/useToast';
import CustomAlert from '@/common/components/CustomAlert';

const Review = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { openToast } = useToast();

  const { mutate: postReview } = usePostReview();
  const { appointmentId } = useParams();

  const [review, setReview] = useState('');
  const [isStarClicked, setIsStarClicked] = useState([false, false, false, false, false]);
  const [showAlert, setShowAlert] = useState(false);

  const rating = isStarClicked.filter(v => v === true).length;

  const isValid = rating !== 0 && review !== '' ? 'main' : 'disabled';
  const isReviewed = rating !== 0 || review !== '';

  const handleReview = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const onSubmit = () => {
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

  const onClick = () => {
    if (isReviewed) {
      setShowAlert(true);
      return;
    }

    navigate(-1);
  };

  return (
    <SafeArea>
      <div className={s.Layout}>
        <div className={s.Wrapper}>
          <CustomHeader onClick={onClick} title="후기 작성하기" />
          <ReviewContent
            handleReview={handleReview}
            isStarClicked={isStarClicked}
            review={review}
            setIsStarClicked={setIsStarClicked}
            nickname={location.state.nickname}
          />
        </div>
        <div className={s.Btn}>
          <Btn mode={isValid} onClick={onSubmit}>
            후기 작성 완료
          </Btn>
        </div>
      </div>
      {showAlert && (
        <CustomAlert
          onYes={() => {
            setShowAlert(false);
            navigate(-1);
          }}
          subTitle="정말 글 작성을 그만두실 건가요?"
          title="지금 그만두면 리뷰가 저장되지 않아요!"
          yesBtn="네, 다음에 다시 쓸게요"
          onNo={() => {
            setShowAlert(false);
          }}
        />
      )}
    </SafeArea>
  );
};

export default Review;
