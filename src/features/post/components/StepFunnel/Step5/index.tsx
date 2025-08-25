import InputField from '../../InputField';
import MultilineInputfield from '../../MultilineInputField';

import * as s from './style.css';
import * as c from '../style.css';

import SelectedPhoto from '../../uploadedPhoto';
import UploadFile from '../../UploadFile';
import { useStep5Store } from '@/features/post/stores/Step5Store';
import { ALLOWED_EXTENSIONS, MAX_DESC, MAX_SIZE_BYTES, MAX_SIZE_MB, MAX_TITLE } from '@/libs/constants';
import AlertText from '../../AlertText';
import { getFileKeys } from '@/common/utils/getFileKeys';
import getImageUrl from '@/common/utils/getImageUrl';
import { useToast } from '@/common/hooks/useToast';

const Step5 = () => {
  const { openToast } = useToast();
  const serverFileKeyStore = useStep5Store(state => state.serverFileKeys);
  const ServerFileKeySetter = useStep5Store(state => state.setServerFileKeys);

  const localFileKeyStore = useStep5Store(state => state.localFileKeys);
  const LocalFileKeySetter = useStep5Store(state => state.setLocalFileKeys);

  const presignedUrlStore = useStep5Store(state => state.presignedUrl);
  const PresignedUrlSetter = useStep5Store(state => state.setPresignedUrl);

  const fileStore = useStep5Store(state => state.file);
  const FileSetter = useStep5Store(state => state.setFile);

  const titleStore = useStep5Store(state => state.title);
  const titleSetter = useStep5Store(state => state.setTitle);

  const descStore = useStep5Store(state => state.desc);
  const descSetter = useStep5Store(state => state.setDesc);

  const handleImageUploaded = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileArray = Array.from(files);

    const validFiles = fileArray.filter(file => {
      const ext = file.name.split('.').pop()?.toLowerCase();
      if (!ext || !ALLOWED_EXTENSIONS.includes(ext)) {
        openToast({ message: `"${file.name}"은(는) 지원하지 않는 확장자입니다.` });
        return false;
      }
      if (file.size > MAX_SIZE_BYTES) {
        openToast({ message: `"${file.name}"은(는) ${MAX_SIZE_MB}MB를 초과합니다.` });
        return false;
      }
      return true;
    });

    if (validFiles.length === 0) return;

    const updatedFiles = [...fileStore, ...validFiles];
    const { fileKeys: newFileKeys, presignedUrls: newPresignedUrls } = await getFileKeys(validFiles);

    FileSetter(updatedFiles);
    LocalFileKeySetter([...localFileKeyStore, ...newFileKeys]);
    PresignedUrlSetter([...presignedUrlStore, ...newPresignedUrls]);
  };

  const removeUploadedImage = (index: number, type: 'server' | 'local') => {
    if (type === 'server') {
      ServerFileKeySetter(serverFileKeyStore.filter((_, i) => i !== index));
    } else {
      FileSetter(fileStore.filter((_, i) => i !== index));
      LocalFileKeySetter(localFileKeyStore.filter((_, i) => i !== index));
      PresignedUrlSetter(presignedUrlStore.filter((_, i) => i !== index));
    }
  };

  const handleDesc = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    descSetter(e.target.value);
  };

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
          />
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

                {/* 서버에서 가져온 이미지 */}
                {serverFileKeyStore.map((key, index) => (
                  <SelectedPhoto
                    key={`server-${index}`}
                    src={getImageUrl(key)}
                    onClick={() => removeUploadedImage(index, 'server')}
                  />
                ))}

                {/* 로컬에서 업로드한 이미지 */}
                {fileStore.map((file, index) => (
                  <SelectedPhoto
                    key={`local-${index}`}
                    src={URL.createObjectURL(file)}
                    onClick={() => removeUploadedImage(index, 'local')}
                  />
                ))}
              </div>

              <div className={s.AlertText}>
                <AlertText isIcon={true}>최대 6장까지 등록이 가능해요.</AlertText>
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
