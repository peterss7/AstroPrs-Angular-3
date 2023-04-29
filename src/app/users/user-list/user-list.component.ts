import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user.model';
import { MOCK_USERS } from 'src/model/mock-users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  users: User[] = MOCK_USERS;

}
