import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { UserOnline} from '../../models/userOnline.interface';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent {
  private userOnline: UserOnline;

  constructor(private router: Router) {
    AuthService.userOnline$.subscribe(item => {
      this.userOnline = item;
    });
  }

  exitUser() {
    AuthService.userOnline$.next({user: null, status: false});
    this.router.navigate(['/account']);
  }

}
