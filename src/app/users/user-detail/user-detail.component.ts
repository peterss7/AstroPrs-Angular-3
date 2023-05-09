import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute} from '@angular/router';



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
    private route: ActivatedRoute,
    )  {}

  ngOnInit() {

    this.route.params.subscribe(parms => this.id = parms['id']);
    console.log("user search id: " + this.id);
    this.userService.get(this.id).subscribe(u => this.user = u as User);

    console.log("user on detail: " + JSON.stringify(this.user));
  }

  deleteUser(id: number){
    this.userService.deleteUserById(id);
  }

}
