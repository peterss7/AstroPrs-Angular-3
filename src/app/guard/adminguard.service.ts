import { Injectable, EventEmitter, Output } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { CurrentUser } from '../model/currentUser';
// import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {


  constructor(private authService: AuthService,
  private router: Router) { }



  canActivate(): boolean {

    console.log(this.authService.getIsAdmin());

    const activeGuard =  this.authService.getIsAdmin();

    console.log(activeGuard);

    if(activeGuard){
      return true;
    }
    else{
      this.router.navigate(['/pagenotfound']);

      return false;
    }




  }
}
