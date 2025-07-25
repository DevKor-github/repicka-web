const getImageUrl = (imageUrl: string) => {
  if (imageUrl.startsWith('http')) {
    return imageUrl;
  }
  const prefixUrl = import.meta.env.VITE_IMAGE_PREFIX_URL || '';
  if (!prefixUrl) {
    throw new Error('VITE_IMAGE_PREFIX_URL is not defined or is empty.');
  }
  return `${prefixUrl}/${imageUrl}`;
};

export default getImageUrl;
