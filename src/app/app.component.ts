import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MsalService, MsalBroadcastService, MSAL_GUARD_CONFIG, MsalGuardConfiguration } from '@azure/msal-angular';
import { InteractionStatus, RedirectRequest } from '@azure/msal-browser';
import { ReservationComponent } from './reservation/reservation.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Speridian Technologies';
  isIframe = false;
  loginDisplay = false;
  isAuthenticated=false;
  private readonly _destroying$ = new Subject<void>();

  constructor(public dialog:MatDialog, @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration, private broadcastService: MsalBroadcastService, private authService: MsalService,
  private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.isIframe = window !== window.parent && !window.opener;

    this.broadcastService.inProgress$
    .pipe(
      filter((status: InteractionStatus) => status === InteractionStatus.None),
      takeUntil(this._destroying$)
    )
    .subscribe(() => {
      this.setLoginDisplay();
    })
  }

  login() {
    if (this.msalGuardConfig.authRequest){
     this.authService.loginRedirect({...this.msalGuardConfig.authRequest} as RedirectRequest);

    } else {
      this.authService.loginRedirect();
    }

  }

  logout() { // Add log out function here
    this.authService.logoutRedirect({
      postLogoutRedirectUri: 'http://localhost:4200'
    });
  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
    // this.loginDisplay = this.authService.instance.getAccountByUsername('').length > 0;

  }

  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
  openDialog()
  {
    const dialogRef = this.dialog.open(ReservationComponent, {
      width: '450px',
      height:'600px',
  
  
    });
  }

}
