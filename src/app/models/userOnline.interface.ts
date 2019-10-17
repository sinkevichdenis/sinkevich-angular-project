import {User} from './user.interface';

export interface UserOnline {
  user: User | null;
  status: boolean;
}
