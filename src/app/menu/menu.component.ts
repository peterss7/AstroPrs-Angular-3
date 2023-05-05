import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../guard/authguard.service';
import { CurrentUser } from '../model/currentUser';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  private loginSubscription: Subscription = new Subscription;

  visible: boolean = false;
  currentUser: CurrentUser = new CurrentUser();

  constructor(
    private authService: AuthService,
    private authGuard: AuthGuard,
    private router: Router
  ) {

    console.log("in menu constructor with authorized user = " + this.authService.getIsAuthenticated());

    if (this.currentUser.getId() != 0) {
      console.log(this.currentUser + " | <= is gotten current user in menu constructor");
      console.log(this.currentUser.getId() + " | <= is gotten current user is in menu constructor");
      this.visible = true;
    }
    else {
      this.visible = false;
    }
  }

  ngOnInit() {

    console.log("in ngOnInit menu");

    const previousUrl = this.router.url; // Save the previous URL
    this.router.navigate(['/loading']);

    setTimeout(() => {
      history.back(); // Navigate back to previous URL
    }, 1000);

    this.loginSubscription = this.authService.loginEvent
    .subscribe((currentUserRecieved: CurrentUser) => {
      console.log('Logged in user is: ' + currentUserRecieved + ' <=== menu loginsubs ngOnInit');
      this.currentUser = currentUserRecieved;

      if (this.authService.getIsAuthenticated()) {
        console.log('isAuthenticated?: ' + this.authService.getIsAuthenticated() + " in menu ngOnInit");
        this.visible = true;
      }
      else {
        this.visible = false;
      }
    });


  }

  getIsVisible(): boolean {
    if (this.authService.getIsAuthenticated()) {
      this.visible = true;
      return true;
    }
    else {
      this.visible = false;
      return false;
    }
  }

  onLogout(): void {
    this.visible = false;
    this.authService.logout();
    this.ngOnDestroy();
  }

  ngOnDestroy() {
    this.loginSubscription.unsubscribe();
  }



}
