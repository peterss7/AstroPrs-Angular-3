import { Component, OnInit, Input } from '@angular/core';
import { MOCK_USERS } from 'src/model/mock-users';
import { User } from 'src/model/user.model';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  user: User = MOCK_USERS[0];

  constructor() {}

  ngOnInit() {}

}
