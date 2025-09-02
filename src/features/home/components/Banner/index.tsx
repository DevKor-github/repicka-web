import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import banner1 from '@/libs/assets/external_banner_1.webp';
import banner2 from '@/libs/assets/external_banner_2.webp';

import * as s from './style.css';
import { useState } from 'react';

export interface BannerInterface {
  title?: string;
  description?: string;
  author?: string;
  src: string;
  link?: string;
}
// TODO: 실제 API로 교체
const BANNER_DATA: BannerInterface[] = [
  {
    title: '어떻게 삼시세끼 불닭',
    description: '오늘 학식은 뭔가요',
    author: '이따다끼마스',
    src: 'https://t3.ftcdn.net/jpg/05/64/82/08/360_F_564820811_n9WP1mM43pLiQwLkIA07KF9Hat5vkX2v.jpg',
  },
  {
    title: '디코드',
    description: '삑 그리고 담 야 삑 그리고 담야',
    author: '빈췐',
    src: banner1,
    link: 'https://linktr.ee/eugssmixx',
  },
  {
    src: banner2,
    link: 'https://linktr.ee/eugssmixx',
  },
];

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
