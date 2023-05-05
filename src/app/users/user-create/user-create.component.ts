import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    const user = this.authService.getAuthorizedUser();

    if (!user) {
      this.router.navigate(['user/login']);
    }

  }
}
