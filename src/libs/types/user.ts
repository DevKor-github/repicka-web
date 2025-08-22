export interface UserInterface {
  // 공통적인건지는 잘 모르겠네예
  id: number;
  nickname: string;
  profileImageUrl: string;
  isKoreanUnivVerified: boolean;
}

export const GENDER_ARRAY = ['MALE', 'FEMALE'] as const;

export type Gender = (typeof GENDER_ARRAY)[number];
