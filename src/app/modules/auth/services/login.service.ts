import { Injectable } from '@angular/core';
import { User } from '../../../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private user: User = {
    id: 1,
    name: 'Alex',
    isLogin: false,
    city: 'Minsk'
  };

  constructor() {
    console.log('I online', this.user);
  }

  login(): void {
    console.log('I logined', this.user);
    this.user.isLogin = true;
    localStorage.setItem('name', this.user.name);
  }

  exit(): void {
    this.user.isLogin = false;
    localStorage.removeItem('name');
  }

  isLogin(): boolean {
    return this.user.isLogin;
  }
}
