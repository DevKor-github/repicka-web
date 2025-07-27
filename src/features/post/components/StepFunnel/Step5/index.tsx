import InputField from '../../InputField';
import MultilineInputfield from '../../MultilineInputField';

import * as s from './style.css';
import * as c from '../style.css';

import SelectedPhoto from '../../uploadedPhoto';
import UploadFile from '../../UploadFile';
import { useStep5Store } from '@/features/post/stores/Step5Store';
import { ALLOWED_EXTENSIONS, MAX_DESC, MAX_SIZE_BYTES, MAX_SIZE_MB, MAX_TITLE } from '@/libs/constants';
import AlertText from '../../AlertText';

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

    const validFiles = fileArray.filter(file => {
      // TODO: alert 어떻게 띄워줄지 디자인 요청
      const ext = file.name.split('.').pop()?.toLowerCase();
      console.log(ext);
      if (!ext || !ALLOWED_EXTENSIONS.includes(ext)) {
        alert(`"${file.name}"은(는) 지원하지 않는 확장자입니다.`);
        return false;
      }
      if (file.size > MAX_SIZE_BYTES) {
        alert(`"${file.name}"은(는) ${MAX_SIZE_MB}MB를 초과합니다.`);
        return false;
      }
      return true;
    });

    const updatedFiles = [...fileStore, ...validFiles];
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
          상품명을 입력해 주세요
          <InputField
            value={titleStore}
            setValue={titleSetter}
            maxLength={MAX_TITLE}
            placeholder="최대 64자까지 입력이 가능해요."
          ></InputField>
        </div>
        <div className={c.DetailContent}>
          상품 설명을 입력해 주세요
          <div className={s.ProductDesc}>
            <MultilineInputfield
              onChange={handleDesc}
              value={descStore}
              maxLength={MAX_DESC}
              placeholder="제품 타입, 상태, 상세 정보 등 상품 설명을 최대 1000자 이내로 작성해 주세요."
            />
            <div className={s.PhotoLimit}>
              <div className={s.SelectPhotoContainer}>
                <UploadFile onChange={handleImageUploaded} />
                {images.map((file, index) => (
                  <SelectedPhoto key={index} file={file} onClick={() => removeUploadedImage(index)} />
                ))}
              </div>
              <div className={s.AlertText}>
                <AlertText isIcon={true}>최대 6장까지 등록이 가능해요</AlertText>
                <AlertText isIcon={true}>장당 최대 5MB까지 등록이 가능해요.</AlertText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;
