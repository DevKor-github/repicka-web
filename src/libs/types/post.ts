export const TagList = {
  HOCKEY: '아이스하키',
  REFORM: '리폼',
};

export type Tag = keyof typeof TagList;

export interface PostInterface {
  id: number;
  postType: 'SALE' | 'RENTAL';
  title: string;
  productTypes: Tag[];
  thumbnail: string;
  price: number;
  likeCount: number;
  chatRoomCount: number;
  available: boolean;
}
