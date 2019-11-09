import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';

import { FirebaseService } from './services/firebase.service';
import { StateService } from './services/state.service';
import { DateOptionsService } from './services/date-options.service';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    FirebaseService,
    StateService,
    DateOptionsService
  ]
})
export class CoreModule { }
