import InputField from '../InputField';
import MultilineInputfield from '../MultilineInputField';
import * as s from './style.css';

import SelectedPhoto from '../uploadedPhoto';
import UploadPhoto from '../UploadPhoto';
import { useState } from 'react';

const Step5 = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleImageUploaded = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      return;
    }

    const fileArray = Array.from(files);
    setSelectedImages(prev => [...prev, ...fileArray]);

    console.log('선택된 파일: ', files);
  };

  const removeUploadedImage = (index: number) => {
    // 원하는 index를 받아서, 배열에서 해당 아이템 제외
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <header className={s.Head}>상품 소개를 작성해 주세요</header>
      <div className={s.Content}>
        <div className={s.DetailContent}>
          <div className={s.HeaderInputField}>
            상품명을 입력해 주세요
            <InputField />
          </div>
        </div>
        <div className={s.DetailContent}>
          <div className={s.ProductDesc}>
            <div className={s.HeaderInputField}>
              상품 설명을 입력해 주세요
              <MultilineInputfield />
            </div>
            <div className={s.SelectPhotoContainer}>
              <UploadPhoto onChange={handleImageUploaded} />
              {selectedImages.map((file, index) => (
                <SelectedPhoto key={index} file={file} onClick={() => removeUploadedImage(index)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;
