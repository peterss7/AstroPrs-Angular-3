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


  visible: any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}



  ngOnInit(): void {
    this.authService.selectedIsHidden$.subscribe((authHidden) => {
      this.visible = authHidden;
    })
  }

  onLogout(): void {
    this.authService.logout();
  }

  devHelper(): void {
    console.log(this.authService.getIsAuthenticated());
    console.log(this.visible);
  }

}
