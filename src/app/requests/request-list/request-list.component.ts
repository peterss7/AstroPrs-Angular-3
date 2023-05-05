import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Request } from 'src/app/model/request.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent {
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
