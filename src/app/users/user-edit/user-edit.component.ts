import { Component } from '@angular/core';
import { User } from 'src/model/user.model';
import { MOCK_USERS } from 'src/model/mock-users';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  user: User = MOCK_USERS[0];

  constructor() {}

  ngOnInit() {}
}
