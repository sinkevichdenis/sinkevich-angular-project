import { UserDefault } from './userDefault.interface';

export interface User extends UserDefault {
  id: string | number;
  isLogin?: boolean;
}
