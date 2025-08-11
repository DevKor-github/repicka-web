export interface UserInterface {
  id: number;
  nickname: string;
  profileImageUrl: string | undefined;
  isKoreanUnivVerified: boolean;
  gender: string | null;
  height: number | null;
  weight: number | null;
}
