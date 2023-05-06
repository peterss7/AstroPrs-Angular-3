import { CurrentUser } from 'src/app/model/currentUser';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { UserService } from './user.service';
import { Credential } from '../model/credential';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isHidden$ = new BehaviorSubject<any>({});
  selectedIsHidden$ = this.isHidden$.asObservable();



  private userKey = 'user_token';
  private menuToken = 'menu_token';
  private currentUser$ = new BehaviorSubject<any>({});
  selectedCurrentUser$ = this.currentUser$.asObservable();



  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  public authenticate(credentials: Credential): void {
    console.log("authenticating... <== in authService authenticate");
    if (credentials.getUsername() != '' && credentials.getPassword() != '') {
      console.log(credentials.getUsername() + " | " + credentials.getPassword() + ": credentials in authenticate authservice is valid input");

      this.userService.login(credentials).subscribe(
        cUser => {
          const currentUserData = JSON.stringify(cUser);
          console.log(currentUserData);
          // this.currentUser = JSON.parse(currentUserData);
          // console.log(this.currentUser);
          // this.setCurrentUserToken( JSON.stringify(this.currentUser));
          this.setCurrentUserToken(currentUserData);
          this.router.navigate(['/home']);
        },
        error => console.log(error)
      );
    }
  }

  setCurrentUserToken(token: string): void {
    console.log(token);
    this.currentUser$.next(token);
    localStorage.setItem(this.userKey, token);
    localStorage.removeItem(this.menuToken);
    localStorage.setItem(this.menuToken, 'true');
    console.log("visibility set to: " + localStorage.getItem(this.menuToken));
    this.isHidden$.next(true);


  }

  getCurrentUserToken(): string | null {
    return localStorage.getItem(this.userKey);
  }
  removeCurrentUsertoken(): void {
    localStorage.removeItem(this.userKey);
    localStorage.removeItem(this.menuToken);
    localStorage.setItem(this.menuToken, 'false');
    console.log("visibility set to: " + localStorage.getItem(this.menuToken));
    this.isHidden$.next(false);
    this.currentUser$.next('dead');
  }


  public logout(): void {

    this.removeCurrentUsertoken();
    console.log("LOGGED OUT");
    this.router.navigate(['/home']);
  }

  public getIsAuthenticated() {

    const currentUserData = this.getCurrentUserToken();
    if (currentUserData != null) {
      const { id } = JSON.parse(currentUserData);
      console.log("LOGGED IN USER ID IN GET AUTHENTICAED: " + id);
      return true;
    }
    else {
      return false;
    }
  }

  public getIsReviewer(): boolean {

      const currentUserData = this.getCurrentUserToken();
      if (currentUserData != null) {
        const { isReviewer } = JSON.parse(currentUserData);
        console.log(isReviewer + " ISREVIEWER? INSIDE authservice GETISreviewer******");
        if (isReviewer) {
          return true;
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }
    }

  public getIsAdmin(): boolean {
    const  currentUserData = this.getCurrentUserToken();
    if (currentUserData != null){
      const { isAdmin } = JSON.parse(currentUserData);
      if (isAdmin){
        return true;
      }
      else{
        return false;      }

    }
    else{
      return false;
    }
  }
}
