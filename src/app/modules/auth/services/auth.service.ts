import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { FirebaseService } from '../../../core/services/firebase.service';
import { User } from '../../../core/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
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
