import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as s from './style.css';
import { Zoom } from 'swiper/modules';

interface Props {
  images: string[];
}
const ImageContainer = ({ images }: Props) => {
  const totalIndex = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  // TODO: 모바일에서 줌 되는지 확인하기
  return (
    <div className={s.Container}>
      <Swiper
        onSlideChange={swiper => setCurrentIndex(swiper.realIndex)}
        modules={[Zoom]}
        slidesPerView={1}
        spaceBetween={0}
        zoom={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={`${image}-${index}`}>
            <div className="swiper-zoom-container">
              <img className={s.Image} src={image} aria-hidden />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ImageContainer;
