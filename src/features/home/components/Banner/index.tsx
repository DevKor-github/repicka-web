import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import * as s from './style.css';
import { useState } from 'react';

// TODO: 실제 API로 교체
const MOCK_DATA = [
  {
    title: '아 배고프다 육회 먹고 싶다',
    description: '간장 양념 고추장 양념',
    author: '까치',
    src: 'https://github.com/user-attachments/assets/66bed657-d8a9-464a-9d9a-f9647028c1d7',
  },
  {
    title: '토리텐 붓카케 우동',
    description: '새우튀김 추가',
    author: '호랑이',
    src: 'https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg',
  },
  {
    title: '어떻게 삼시세끼 불닭',
    description: '오늘 학식은 뭔가요',
    author: '이따다끼마스',
    src: 'https://t3.ftcdn.net/jpg/05/64/82/08/360_F_564820811_n9WP1mM43pLiQwLkIA07KF9Hat5vkX2v.jpg',
  },
];

const Banner = () => {
  const [data] = useState(MOCK_DATA);
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
            <img className={s.Image} src={item.src} alt={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={s.Filter} />
      <div className={s.ContentInfo}>
        <div className={s.Content}>
          <div className={s.Title}>{currentData.title}</div>
          <div className={s.DescriptionWrapper}>
            <span>{currentData.description}</span>
            <span className={s.Dot} />
            <span>{currentData.author}</span>
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
