import * as s from './style.css';

const ItemCard = () => {
  return (
    <div className={s.Container}>
      <img
        className={s.Image}
        src="https://mblogthumb-phinf.pstatic.net/MjAyMzA4MDRfMTc2/MDAxNjkxMTE0NzQ5OTcz.pOyt39uX8knMD9hZvNLyX3aJGYWGerX4m8CvQgo-Hggg.zyf-KpQOOG0ThLVyCR1-fYzlUX6_W3JdE5Nit2rN0u4g.JPEG.uniunisports/KakaoTalk_20230516_100049984_03.jpg?type=w800"
      />
      <div className={s.Info}>
        <div className={s.Header}>
          <h2 className={s.Title}>빈티지 야구 레플리카(1920년도)</h2>
          <div className={s.Price}>
            <div className={s.PriceItem}>
              <label>대여료</label>
              <p>10,000원</p>
            </div>
            <div className={s.PriceItem}>
              <label>보증금</label>
              <p>30,000원</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemCard;
