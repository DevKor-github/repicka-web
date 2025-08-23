import axios from 'axios';

export const s3PutImageToUrl = async (file: File, url: string) => {
  try {
    const res = await axios.put(url, file, {
      headers: { 'Content-Type': file.type },
    });

    if (![200, 201].includes(res.status)) {
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
