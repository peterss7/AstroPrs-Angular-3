import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent {
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
