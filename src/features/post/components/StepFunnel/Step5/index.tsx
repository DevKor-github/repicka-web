import InputField from '../../InputField';
import MultilineInputfield from '../../MultilineInputField';
import * as s from './style.css';
import * as c from '../style.css';

import SelectedPhoto from '../../uploadedPhoto';
import UploadFile from '../../UploadFile';
import { useStep5Store } from '@/features/post/stores/Step5Store';

const Step5 = () => {
  const imageStore = useStep5Store(state => state.images);
  const imageSetter = useStep5Store(state => state.setImages);

  const fileStore = useStep5Store(state => state.files);
  const fileSetter = useStep5Store(state => state.setFiles);

  const titleStore = useStep5Store(state => state.title);
  const titleSetter = useStep5Store(state => state.setTitle);

  const descStore = useStep5Store(state => state.desc);
  const descSetter = useStep5Store(state => state.setDesc);

  // s3로 보내는 건 완료 버튼 눌렀을 때고, zustand에는 미리보기 이미지만 저장해 두기
  // 근데 그럼 나중에 백엔드로 보낼 때 이미지 부분은 또 따로 로직을 파야겠네 흠

  const handleImageUploaded = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileArray = Array.from(files);
    const previewUrls: string[] = [];

    fileArray.forEach(file => {
      const previewUrl = URL.createObjectURL(file); // 브라우저 미리보기용 URL
      previewUrls.push(previewUrl);
    });

    const updatedImages = [...imageStore, ...previewUrls];
    const updatedFiles = [...fileStore, ...fileArray];
    imageSetter(updatedImages);
    fileSetter(updatedFiles);
  };

  const removeUploadedImage = (index: number) => {
    imageSetter(imageStore.filter((_, i) => i !== index));
    fileSetter(fileStore.filter((_, i) => i !== index));
  };

  const handleDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updated = e.target.value;

    descSetter(updated);
  };

  return (
    <div>
      <header className={c.Head}>상품 소개를 작성해 주세요</header>
      <div className={c.Content}>
        <div className={c.DetailContent}>
          상품명을 입력해 주세요
          <InputField value={titleStore} setValue={titleSetter}></InputField>
        </div>
        <div className={c.DetailContent}>
          상품 설명을 입력해 주세요
          <div className={s.ProductDesc}>
            <MultilineInputfield onChange={handleDesc} value={descStore} />
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
