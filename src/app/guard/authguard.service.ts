import { Injectable, EventEmitter  } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { CurrentUser } from '../model/currentUser';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {



  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {

    console.log("canActivate? <== in authguard canactivate");

    if (this.authService.getIsAuthenticated()) {
      console.log("isAuthenticated? in canActivate? <== in authguard canactivate");
      console.log("AUTHENTICATED");
      console.log("AUTHENTICATED USER: " + this.authService.getAuthorizedUser());
      return true;
    } else {
      console.log("isAuthenticated? in canActivate? <== in authguard canactivate");
      console.log("NOT AUTHENTICATED");
      this.router.navigate(['user/login']);
      return false;
    }

  }
}
