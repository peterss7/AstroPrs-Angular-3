import { AuthService } from 'src/app/service/auth.service';
import { AuthenticatingScreenComponent } from './../users/user-login/authenticating-screen/authenticating-screen.component';
import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(){

  }

}
