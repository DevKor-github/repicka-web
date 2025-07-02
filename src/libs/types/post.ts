export interface PostInterface {
  id: number;
  postType: 'SALE' | 'RENTAL';
  title: string;
  productTypes: string[]; // TODO: 타입 정의
  thumbnail: string;
  price: number;
  likeCount: number;
  chatRoomCount: number;
  available: boolean;
}
