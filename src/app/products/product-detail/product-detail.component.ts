import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from 'src/app/model/product.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(){
    const user = this.authService.getAuthorizedUser();

    if(!user){
      this.router.navigate(['user/login']);
    }

  }

}
