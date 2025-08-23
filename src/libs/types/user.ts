export type Gender = 'MALE' | 'FEMALE';

export interface UserInterface {
  id: number;
  nickname: string;
  profileImageUrl: string | null;
  isKoreanUnivVerified: boolean;
  gender: Gender | null;
  height: number | null;
  weight: number | null;
}
