import {
  Component, OnInit, Output,
  EventEmitter
} from '@angular/core';
import { ListTableComponent } from 'src/app/shared/list-table/list-table.component';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  pageTitle: string = "User Detail";

  visibleUsers: User[] = [];
  users: User[] = [];
  startIndex: number = 1;
  endIndex: number = 10;
  loading = true;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit(): void {

    const user = this.authService.getAuthorizedUser();

    if (!user) {
      this.router.navigate(['user/login']);
    }

    this.userService.list().subscribe(u => {
      this.users = u;
      this.visibleUsers = this.users.slice(this.startIndex, this.endIndex);
      this.loading = false;
    });
  }
}
