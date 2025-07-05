import * as s from './style.css';

interface Props {
  images: string[];
  title: string;
}
const ImageContainer = ({ title }: Props) => {
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
