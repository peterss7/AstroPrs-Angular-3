import { Component, OnInit, Input, Output,
    EventEmitter} from '@angular/core';
import { User } from 'src/model/user.model';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit{

  targetUser: User = new User();
  id: number = 0;

  @Output()
  save = new EventEmitter<any>();
  @Output()
  cancel = new EventEmitter<void>();

  userEditForm: FormGroup = new FormGroup({});

  constructor(
    private UserService: UserService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(){
    this.route.params.subscribe(params => this.id = params['id']);
    this.UserService.get(this.id).subscribe(u => this.targetUser = u as User);
  }

  this.userForm = new FormGroup({
    firstname: new FormControl(this.editedUser.firstname),
    lastname: new FormControl(this.user.lastname),
    lastname: new FormControl(this.user.lastname),

  });

}
