import type { ColorType } from '@/libs/types/post';

export const COLOR_MAP: Record<ColorType, string> = {
  CRIMSON: '#C30003',
  BLACK: 'black',
  WHITE: '#F2F2F2',
  IVORY: '#F2E8DA',
  OTHER: 'gray', // TODO:
};

const colorMap: Record<string, string> = {
  Crimson: '#C30003',
  Black: 'black',
  White: '#F2F2F2',
  Ivory: '#F2E8DA',
};

export default colorMap;
