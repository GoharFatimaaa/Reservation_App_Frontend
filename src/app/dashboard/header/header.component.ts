
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationComponent } from 'src/app/reservation/reservation.component';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  // loginDisplay = false;
  isAuthenticated=true;
  constructor(public dialog:MatDialog, 
  private router:Router, private route:ActivatedRoute,private authService: MsalService) { }
  openDialog()
  {
    const dialogRef = this.dialog.open(ReservationComponent, {
      width: '450px',
      height:'600px',
  
  
    });
  }

  logout() { // Add log out function here
    this.authService.logoutRedirect({
      postLogoutRedirectUri: 'http://localhost:4200'
    });
  }
}


