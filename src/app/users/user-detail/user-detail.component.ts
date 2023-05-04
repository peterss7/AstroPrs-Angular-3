import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';


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
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.userService.get(this.id).subscribe(u => this.user = u as User);
  }

}
