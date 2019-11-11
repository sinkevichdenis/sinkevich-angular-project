import { NgModule } from '@angular/core';
import {Routes, RouterModule, NoPreloading} from '@angular/router';
import { AccountPageComponent } from '../account-page/account-page.component';
import { AuthGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: '../home-page/home-page.module#HomePageModule' },
  {
    path: 'account',
    component: AccountPageComponent,
    canLoad: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadChildren: '../cpa/cpa.module#CpaModule'
  },
  { path: 'contacts', loadChildren: '../contacts-page/contacts-page.module#ContactsPageModule'},
  { path: 'feedbacks', loadChildren: '../feedbacks-page/feedbacks-page.module#FeedbacksPageModule'},
  { path: '**', loadChildren: '../error-page/error-page.module#ErrorPageModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
