import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  pageTitle: string = "User Detail";
  user: User = new User();
  id: number = 0;

  users: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = params['id']);
    this.userService.get(this.id).subscribe(u => this.user = u as User);

    this.userService.list().subscribe((users) => {
      this.users = users.slice(0,8);
    });
  }
}
