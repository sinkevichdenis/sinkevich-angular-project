import { Visitor } from './visitor.interface';

export interface User extends Visitor {
  id: string | number;
  isLogin: boolean;
}
