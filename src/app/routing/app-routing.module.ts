import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// main pages
import { HomePageComponent } from '../home-page/home-page.component';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { ContactsPageComponent } from '../contacts-page/contacts-page.component';
import { AccountPageComponent } from '../account-page/account-page.component';
import { AuthGuard } from '../auth/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full' },
  {
    path: 'account',
    component: AccountPageComponent,
    canLoad: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadChildren: '../cpa/cpa.module#CpaModule'
  },
  { path: 'contacts', component: ContactsPageComponent, pathMatch: 'full'},
  { path: 'feedbacks', loadChildren: '../feedbacks-page/feedbacks-page.module#FeedbacksPageModule'},
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
