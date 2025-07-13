import axios from 'axios';

export const s3PutImageToUrl = async (file: File, url: string) => {
  const headers = {
    'Content-Type': file.type,
  };

  return axios.put(url, file, { headers });
};
