import banner1 from '@/libs/assets/external_banner_1.webp';
import banner2 from '@/libs/assets/external_banner_2.webp';

export interface BannerInterface {
  title?: string;
  description?: string;
  author?: string;
  src: string;
  link?: string;
}

// TODO: 실제 API로 교체
export const BANNER_DATA: BannerInterface[] = [
  {
    title: 'de:Kode your Color',
    description: '고연전 레플리카도 디코드와 함께!',
    author: 'de:Kode',
    src: banner1,
    link: 'https://linktr.ee/eugssmixx',
  },
  {
    title: 'de:Kode your Color',
    description: '고연전 레플리카도 디코드와 함께!',
    author: 'de:Kode',
    src: banner2,
    link: 'https://linktr.ee/eugssmixx',
  },
];
