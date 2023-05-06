import { DeletionService } from './../../service/deletion.service.service';
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
  startIndex!: number;
  endIndex: number = -10;
  loading = true;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private deletionService: DeletionService
    ) { }

  ngOnInit(): void {


    this.userService.list().subscribe(u => {
      this.users = u;
      this.visibleUsers = this.users.slice(this.endIndex);
      this.loading = false;
    });

    console.log("in user list is authenticated?: " + this.authService.getIsAuthenticated());

  }

  public onDeleteUser(): void{

    console.log("going to delete: USER");
    this.deletionService.delete('USER');
  }

}
