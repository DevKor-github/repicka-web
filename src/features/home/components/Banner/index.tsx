import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as s from './style.css';
import { useState } from 'react';
import { BANNER_DATA } from '@/features/home/constants';

const Banner = () => {
  const [data] = useState(BANNER_DATA);
  const totalIndex = data.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentData = data[currentIndex];

  return (
    <div className={s.Container}>
      <Swiper
        onSlideChange={swiper => {
          setCurrentIndex(swiper.realIndex);
        }}
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{ delay: 5000 }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={`${item.title}-${index}`}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img className={s.Image} src={item.src} alt={item.title} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={s.Filter} />
      <div className={s.ContentInfo}>
        <div className={s.Content}>
          <div className={s.Title}>{currentData.title}</div>
          <div className={s.DescriptionWrapper}>
            <span>{currentData.description}</span>
            {currentData.author && (
              <>
                <span className={s.Dot} />
                <span>{currentData.author}</span>
              </>
            )}
          </div>
        </div>
        <div className={s.Fraction}>
          <span>{currentIndex + 1}</span>
          <span>/</span>
          <span>{totalIndex}</span>
        </div>
      </div>
    </div>
  );
};
export default Banner;
