import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserUtils } from '@azure/msal-browser';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MsalGuard } from '@azure/msal-angular';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';
 import { ReservationComponent } from './reservation/reservation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    // canActivate: [MsalGuard],
    pathMatch:'full',
  },
  {
    path: 'reserve',
    component:  ReservationComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'detail',
    component: ReservationDetailComponent,
    canActivate: [MsalGuard]
  },
  {
    path: 'dashboard',
    component:  DashboardComponent,
    canActivate: [MsalGuard]
  },

];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // Don't perform initial navigation in iframes or popups
   initialNavigation: !BrowserUtils.isInIframe() && !BrowserUtils.isInPopup() ? 'enabledNonBlocking' : 'disabled' // Set to enabledBlocking to use Angular Universal
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
