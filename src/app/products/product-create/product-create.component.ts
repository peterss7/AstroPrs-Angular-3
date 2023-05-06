import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {




  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(){
    this.authService.selectedCurrentUser$.subscribe((authUser) => {
      console.log(authUser);
    });



  }

}
