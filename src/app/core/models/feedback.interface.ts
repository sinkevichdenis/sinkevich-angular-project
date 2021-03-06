import { UserDefault } from './user-default.interface';

export interface Feedback extends UserDefault {
  text: string;
  stars: number|null;
  date?: number;
}
