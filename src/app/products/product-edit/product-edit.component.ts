import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Product } from 'src/app/model/product.model';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {

  constructor(
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit(){
    if (!this.cookieService.get('currentUser')){
      this.router.navigate(['login']);
    }

  }


}
