import * as s from './style.css';

interface Props {
  images: string[];
  title: string;
}
const ImageContainer = ({ images, title }: Props) => {
  // TODO: 이미지 여러개 넘길 수 있도록, 확대 기능? 추가
  return (
    <div className={s.Container}>
      {/* TODO: 흠 필터가 이미지 종속적인게 아니라 상단 바 종속적인걸 수 있겠군... */}
      <div className={s.Filter} />
      <img className={s.Image} src={images[0]} alt={title} />
    </div>
  );
};
export default ImageContainer;
