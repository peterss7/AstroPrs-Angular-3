import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Request } from 'src/app/model/request.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(){
    const user = this.authService.getAuthorizedUser();

    if(!user){
      this.router.navigate(['user/login']);
    }

  }


}
