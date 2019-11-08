import { UserDefault } from './user-default.interface';

export interface User extends UserDefault {
  id?: string | number;
  password: string;
}
