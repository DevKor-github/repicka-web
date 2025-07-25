const getImageUrl = (imageUrl: string) => {
  if (imageUrl.startsWith('http')) {
    return imageUrl;
  }
  return `${import.meta.env.VITE_IMAGE_PREFIX_URL}/${imageUrl}`;
};

export default getImageUrl;
