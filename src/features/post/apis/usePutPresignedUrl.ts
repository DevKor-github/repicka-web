// baseUrl 무시 (외부 주소)
// 왜 s3에 사진이 안 들어가지? 200으로 응답이 오는데 왜...

import axios from 'axios';

export const s3PutImageToUrl = async (file: File, url: string) => {
  try {
    const res = await axios.put(url, file, {
      headers: { 'Content-Type': file.type },
    });

    // S3는 200(OK) 또는 204(No Content)·201(Created)를 주기도 함
    if (![200, 201, 204].includes(res.status)) {
      throw new Error(`S3 responded ${res.status}`);
    }
  } catch (err) {
    const msg =
      axios.isAxiosError(err) && err.response
        ? `S3 upload failed (${err.response.status})`
        : 'Network error during S3 upload';
    throw new Error(msg);
  }
};
