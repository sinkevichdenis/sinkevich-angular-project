import { Injectable } from '@angular/core';
import { AngularFirestore} from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afs: AngularFirestore) {}

  getItems<T>(path: string): Observable<T[]> {
    return this.afs.collection(path).snapshotChanges().pipe(
      map(changes => {
        return changes.map( x => {
          const data = x.payload.doc.data() as any;
          data.id = x.payload.doc.id;
          return data as T;
        });
      })
    );
  }

  addItem(path: string, item: any) {
    this.afs.collection(path).add(item);
  }

  getSelectedValues<T>(path: string, key: string): Observable<any[]> {
    return this.getItems<T>(path).pipe(
      map(items => items.map(item => item[key]))
    );
  }

  updateItem(path: string, item: any) {
    this.afs.doc(`${path}/${item.id}`).update(item);
  }

  deleteItem(path: string, item: any) {
    this.afs.doc(`${path}/${item.id}`).delete();
  }

}
