import InputField from '../../InputField';
import MultilineInputfield from '../../MultilineInputField';
import * as s from './style.css';
import * as c from '../style.css';

import SelectedPhoto from '../../uploadedPhoto';
import UploadFile from '../../UploadFile';
import { useStep5Store } from '@/features/post/stores/Step5Store';

const titleLimit = 64;
const descLimit = 1000;

const Step5 = () => {
  const fileStore = useStep5Store(state => state.files);
  const fileSetter = useStep5Store(state => state.setFiles);

  const titleStore = useStep5Store(state => state.title);
  const titleSetter = useStep5Store(state => state.setTitle);

  const descStore = useStep5Store(state => state.desc);
  const descSetter = useStep5Store(state => state.setDesc);

  const handleImageUploaded = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileArray = Array.from(files);

    const updatedFiles = [...fileStore, ...fileArray];
    fileSetter(updatedFiles);
  };

  const removeUploadedImage = (index: number) => {
    fileSetter(fileStore.filter((_, i) => i !== index));
  };

  const handleDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updated = e.target.value;

    descSetter(updated);
  };

  const images = fileStore.map(file => URL.createObjectURL(file));

  return (
    <div>
      <header className={c.Head}>상품 소개를 작성해 주세요</header>
      <div className={c.Content}>
        <div className={c.DetailContent}>
          상품명을 입력해 주세요 (최대 {titleLimit}자)
          <InputField value={titleStore} setValue={titleSetter} maxLength={titleLimit}></InputField>
        </div>
        <div className={c.DetailContent}>
          상품 설명을 입력해 주세요 (최대 {descLimit}자)
          <div className={s.ProductDesc}>
            <MultilineInputfield onChange={handleDesc} value={descStore} maxLength={descLimit} />
            <div className={s.PhotoLimit}>
              <div className={s.SelectPhotoContainer}>
                <UploadFile onChange={handleImageUploaded} />
                {images.map((file, index) => (
                  <SelectedPhoto key={index} file={file} onClick={() => removeUploadedImage(index)} />
                ))}
              </div>
              <div className={s.AlertText}>
                <span className="mgc_alert_octagon_fill"></span>
                사진은 최대 6장까지 등록이 가능해요.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;
