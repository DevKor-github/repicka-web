/**
 * UTC Date를 KST Date로 변환
 */
export const toKST = (date: Date) => {
  // KST : UTC + 9
  return new Date(date.getTime() + 9 * 60 * 60 * 1000);
};
