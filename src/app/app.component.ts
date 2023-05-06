import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AstroPrs-Angular';

  constructor(
    private cookieService: CookieService
  ) {
    cookieService.delete('currentUser');
    cookieService.set('loggedIn', JSON.stringify('FALSE'));
  }



}
