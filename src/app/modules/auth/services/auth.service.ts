import { Injectable } from '@angular/core';
import { User } from '../../../models/user.interface';
import { FirebaseService } from '../../../data/firebase.service';
import { BehaviorSubject, Observable} from 'rxjs';
import { UserOnline } from '../../../models/userOnline.interface';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static userOnline$ = new BehaviorSubject<UserOnline>({user: null, status: false});
  private dbKey = 'users';

  constructor(private fb: FirebaseService) {}

  getUsers(): Observable<User[]> {
    return this.fb.getItems<User>(this.dbKey);
  }

  addUsers(item: User): void {
    this.fb.addItem(this.dbKey, item);
  }

  getSelectedValues(key: string): Observable<any[]> {
    return this.fb.getSelectedValues<User>(this.dbKey, key);
  }

  getUserWithId(keyValue: string): Observable<User> {
    return this.getUsers().pipe(
      map(items => items.find(item => item.name === keyValue)),
    );
  }
}
