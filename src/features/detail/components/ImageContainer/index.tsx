import * as s from './style.css';

interface Props {
  images: string[];
  title: string;
}
const ImageContainer = ({ title }: Props) => {
  // TODO: 이미지 여러개 넘길 수 있도록, 확대 기능? 추가
  return (
    <div className={s.Container}>
      <div className={s.Filter} />
      <img
        className={s.Image}
        src={'https://crimsonstore.co.kr/web/product/medium/202412/6a5424bbd03c17f28b375a06a31fd4de.jpg'}
        alt={title}
      />
    </div>
  );
};
export default ImageContainer;
