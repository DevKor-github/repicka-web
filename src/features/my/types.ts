import type { Gender } from '@/libs/types/user';

export interface UserInterface {
  id: number;
  nickname: string;
  profileImageUrl: string | undefined;
  isKoreanUnivVerified: boolean;
  gender: Gender | null;
  height: number | null;
  weight: number | null;
}
