import { EventEmitter, Injectable, Output } from '@angular/core';
import { UserService } from './user.service';
import { CurrentUser } from '../model/currentUser';
import { Credential } from '../model/credential';
import { Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Output()
  loginEvent = new EventEmitter<CurrentUser>();

  private currentUser!: CurrentUser;
  private isAuthenticated: boolean = false;


  constructor(
    private userService: UserService,
    private router: Router,
    private cookieService: CookieService
  ) { }

  public authenticate(credentials: Credential): void {
    console.log("authenticating... <== in authService authenticate");
    if (credentials.getUsername() != '' && credentials.getPassword() != '') {
      console.log(credentials.getUsername() + " | "  + credentials.getPassword() + ": credentials in authenticate authservice is valid input");


      this.userService.login(credentials).subscribe(
        cUser => {
          /*
          console.log(cUser + " <== in authenticate in authservice, authentication AFTER CREDS SEND AND IN SUBSCRIBE");
          console.log("stringy: " + JSON.stringify(cUser) + " <== authenticate authservice");
          this.currentUser = JSON.parse(JSON.stringify(cUser));
          console.log(this.currentUser + " <== in authenticate in authservice, AFTER STRINGIFY");
          */
          this.currentUser = new CurrentUser();
          this.cookieService.set('currentUser', JSON.stringify(this.currentUser));
          Object.assign(this.currentUser, cUser);
          // console.log(this.currentUser + " <== in authenticate in authservice, AFTER OBJECT ASSIGN");
          if (this.currentUser.getIsAdmin() != null){
            this.isAuthenticated = true;
            // console.log("AUTHENTICATION SUCCESSFUL");
            this.router.navigate(['/home']);
            this.emitLoginEvent();
          }
        },
        error => console.log(error)
      );
    }
  }

  public emitLoginEvent(){
    console.log("emitting logged in user with id of: " + this.currentUser.getId() + " in emit loginEvent in AuthService");
    this.loginEvent.emit(this.currentUser);
  }
  public emitLogoutEvent(){
    console.log("emitting logout in emit logoutEvent in AuthService");
    this.loginEvent.emit(this.currentUser);
  }





  public logout(): void {

    this.emitLogoutEvent();
    this.isAuthenticated = false;
    this.currentUser.reset();
    console.log("LOGGED OUT");
    this.router.navigate(['/home']);

  }

  public getIsAuthenticated() {
    return this.isAuthenticated;
  }

  public getAuthorizedUser(): CurrentUser {
    console.log(this.currentUser + " | getting authorized user");
    const currentUserData = JSON.parse(this.cookieService.get('currentUser'));
    this.currentUser = new CurrentUser();
    this.currentUser = Object.assign(this.currentUser, currentUserData);
    return this.currentUser;

    // return this.currentUser;
  }

}
