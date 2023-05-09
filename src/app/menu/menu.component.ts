import { Component, HostListener, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';

// import { AuthGuard } from '../../guard/authguard.service';
// import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  visible!: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.visible = false;
  }



  ngOnInit(): void {

    this.visible = false;

    this.authService.selectedIsHidden$.subscribe((authHidden) => {
      this.visible = authHidden;
    })
  }

  onLogout(): void {
    this.authService.logout();
  }

  devHelper(): void {
    this.authService.enterDevMode();
    console.log(this.authService.getIsAuthenticated());
    console.log("user token from auth service(do i still care?): " + JSON.parse(this.authService.getCurrentUserToken() + ''));
    console.log("Menu visibility: " + this.visible);
    console.log("User isAdmin: " + this.authService.getIsReviewer());
    console.log("User isReviewer: " + this.authService.getIsAdmin());
  }

  exitDevMode(): void {
    this.authService.exitDevMode();
  }

}
