import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';

import { FirebaseService } from './services/firebase.service';
import { StateService } from './services/state.service';
import { DateOptionsService } from './services/date-options.service';

@NgModule({
  imports: [
    CommonModule,
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
