import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    const user = this.authService.getAuthorizedUser();

    if(!user){
      this.router.navigate(['/login']);
    }

  }

}
