import { UserDefault } from './userDefault.interface';

export interface Feedback extends UserDefault {
  text: string;
  stars: number|null;
  date?: number;
}
