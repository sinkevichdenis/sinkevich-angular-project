import { Visitor } from './visitor.interface';

export interface Feedback extends Visitor {
  text: string;
  stars: number|null;
}
