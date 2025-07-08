import InputField from '../../InputField';
import MultilineInputfield from '../../MultilineInputField';
import * as s from './style.css';
import * as c from '../style.css';

import SelectedPhoto from '../../uploadedPhoto';
import UploadFile from '../../UploadFile';
import { usePostWriteStore } from '@/features/post/stores/postWriteStore';

const Step5 = () => {
  const imageStore = usePostWriteStore(state => state.images);
  const imageSetter = usePostWriteStore(state => state.setImages);

  const handleImageUploaded = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      return;
    }

    const fileArray = Array.from(files);
    const imageUrls = fileArray.map(file => URL.createObjectURL(file));
    imageSetter([...imageStore, ...imageUrls]);
  };

  const removeUploadedImage = (index: number) => {
    // 원하는 index를 받아서, store에서 해당 아이템 제외
    imageSetter(imageStore.filter((_, i) => i !== index));
  };

  return (
    <div>
      <header className={c.Head}>상품 소개를 작성해 주세요</header>
      <div className={c.Content}>
        <div className={c.DetailContent}>
          상품명을 입력해 주세요
          <InputField />
        </div>
        <div className={c.DetailContent}>
          상품 설명을 입력해 주세요
          <div className={s.ProductDesc}>
            <MultilineInputfield />
            <div className={s.SelectPhotoContainer}>
              <UploadFile onChange={handleImageUploaded} />
              {imageStore.map((file, index) => (
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
