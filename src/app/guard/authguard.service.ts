import { Injectable, EventEmitter, Output  } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
// import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {



  // constructor(private cookieService: CookieService, private router: Router) {}
  constructor(private authService: AuthService, private router: Router) {}

  @Output()
  loginEvent = new EventEmitter<boolean>();

  @Output()
  logoutEvent = new EventEmitter<boolean>();

  canActivate(): boolean {

    console.log("canActivate? <== in authguard canactivate");

    // if (this.cookieService.get('currentUser')) {
      if (this.authService.getIsAuthenticated()) {
      console.log("isAuthenticated? in canActivate? <== in authguard canactivate");
      console.log("AUTHENTICATED");
      this.loginEvent.emit(true);
      return true;
    } else {
      console.log("isAuthenticated? in canActivate? <== in authguard canactivate");
      console.log("NOT AUTHENTICATED");
      this.router.navigate(['user/login']);
      this.logoutEvent.emit(false);
      return false;
    }

  }
}
