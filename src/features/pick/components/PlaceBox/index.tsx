import type { TransactionType } from '@/libs/types/item';
import * as s from './style.css';
import { cx } from '@styled-system/css';

interface PlaceViewerProps {
  placeTitle: string;
  location: string;
  setLocation: (location: string) => void;
}
const PlaceViewer = ({ placeTitle, location, setLocation }: PlaceViewerProps) => {
  return (
    <div className={s.PlaceViewer}>
      <div className={s.PlaceViewerContent}>
        <p>{placeTitle}</p>
        <span />
        <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
      </div>
      <span className={cx('mgc_edit_4_fill', s.PlaceViewerButton)} />
    </div>
  );
};

interface Props {
  transactionType: TransactionType;
  startLocation: string;
  endLocation: string;
  setStartLocation: (location: string) => void;
  setEndLocation: (location: string) => void;
}
const PlaceBox = ({ transactionType, startLocation, endLocation, setStartLocation, setEndLocation }: Props) => {
  const isRental = transactionType === 'RENTAL';

  return (
    <div className={s.Container}>
      <PlaceViewer
        placeTitle={isRental ? '대여 장소' : '거래 장소'}
        location={startLocation}
        setLocation={setStartLocation}
      />
      {isRental && <PlaceViewer placeTitle="반납 장소" location={endLocation} setLocation={setEndLocation} />}
    </div>
  );
};
export default PlaceBox;
