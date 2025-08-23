const prefixUrl = import.meta.env.VITE_IMAGE_PREFIX_URL || '';

const getImageUrl = (imageUrl: string) => {
  if (imageUrl.startsWith('http') || imageUrl.startsWith('blob:')) {
    return imageUrl;
  }

  return `${prefixUrl}/${imageUrl}`;
};

export default getImageUrl;
