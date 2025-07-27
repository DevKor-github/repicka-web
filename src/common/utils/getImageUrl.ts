const prefixUrl = import.meta.env.VITE_IMAGE_PREFIX_URL || '';

const getImageUrl = (imageUrl: string) => {
  if (imageUrl.startsWith('http')) {
    return imageUrl;
  }

  return `${prefixUrl}/${imageUrl}`;
};

export default getImageUrl;
