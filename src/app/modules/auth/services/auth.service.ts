import { Injectable } from '@angular/core';
import { User } from '../../../models/user.interface';
import { FirebaseService } from '../../../data/firebase.service';
import { BehaviorSubject, Observable} from 'rxjs';
import { UserOnline } from '../../../models/userOnline.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static userOnline$ = new BehaviorSubject<UserOnline>({user: null, status: false});

  constructor(private fb: FirebaseService) {
    this.fb.getSelectedValues<User>('users', 'id').subscribe(items => console.log(items));
  }

  getUsers(): Observable<User[]> {
    return this.fb.getItems<User>('users');
  }

}
