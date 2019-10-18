import { Injectable } from '@angular/core';
import { AngularFirestore} from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {pluck, tap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afs: AngularFirestore) {}

  getItems<T>(dir: string): Observable<T[]> {
    return this.afs.collection(dir).snapshotChanges().pipe(
      map(changes => {
        return changes.map( x => {
          const data = x.payload.doc.data() as any;
          data.id = x.payload.doc.id;
          return data as T;
        });
      })
    );
  }

  addItem(dir: string, item: any): void {
    this.afs.collection(dir).add(item);
  }

  getSelectedValues<T>(dir: string, key: string): Observable<any[]> {
    return this.getItems<T>(dir).pipe(
      map(items => items.map(item => item[key]))
    );
  }

}
