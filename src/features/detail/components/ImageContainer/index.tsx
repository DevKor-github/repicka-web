import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as s from './style.css';
import { Zoom } from 'swiper/modules';
import StepIndicator from '@/features/detail/components/StepIndicator';
import getImageUrl from '@/common/utils/getImageUrl';

interface Props {
  images: string[];
}
const ImageContainer = ({ images }: Props) => {
  const totalIndex = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={s.Container}>
      <Swiper
        onSlideChange={swiper => setCurrentIndex(swiper.realIndex)}
        modules={[Zoom]}
        slidesPerView={1}
        spaceBetween={0}
        zoom={true}
        loop={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={`${image}-${index}`}>
            <div className="swiper-zoom-container">
              <img className={s.Image} src={getImageUrl(image)} aria-hidden />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {totalIndex > 1 && (
        <div className={s.StepIndicator}>
          <StepIndicator currentIndex={currentIndex} totalLength={totalIndex} />
        </div>
      )}
    </div>
  );
};
export default ImageContainer;
