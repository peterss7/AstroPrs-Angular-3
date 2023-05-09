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



    if (localStorage.getItem('dev_token') == 'true'){
      console.log("devMode active. Access is granted");
      return true;
    }

    console.log("Is user an Admin? " + this.authService.getIsAdmin() + "  <==== adminGuard");




    const activeGuard =  this.authService.getIsAdmin();


    console.log("Is user an Admin? " + activeGuard  + "  <==== adminGuard");

    if(activeGuard){
      return true;
    }
    else{
      this.router.navigate(['/page-unauthorized']);

      setTimeout(() => {
        console.log("unauthorized acceess attempt");
        this.router.navigate(['/home']);

      }, 3500);

      return false;
    }




  }
}
