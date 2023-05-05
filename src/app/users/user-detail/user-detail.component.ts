import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  user: User = new User();
  id: number = 0;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) {}

  ngOnInit() {

    const user = this.authService.getAuthorizedUser();

    if(!user){
      this.router.navigate(['user/login']);
    }

    this.route.params.subscribe(parms => this.id = parms['id']);
    this.userService.get(this.id).subscribe(u => this.user = u as User);
  }

}
