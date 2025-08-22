import { getPresignedUrl } from '../apis/useGetPresignedUrl';

// 배열인 경우
export const getFileKeys = async (files: File[]) => {
  const getUrlResult = await Promise.all(files.map(file => getPresignedUrl(file)));
  const presignedUrls = getUrlResult.map(result => result.presignedUrl as string);
  const fileKeys = getUrlResult.map(result => result.fileKey as string);

  // await Promise.all(presignedUrls.map((url, idx) => s3PutImageToUrl(files[idx], url)));

  return { presignedUrls, fileKeys };
};

// 배열이 아닌 경우
export const getFileKey = async (file: File) => {
  const { presignedUrl, fileKey } = await getPresignedUrl(file);

  return { presignedUrl, fileKey };
};
