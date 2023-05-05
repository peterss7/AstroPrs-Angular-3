import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "src/app/model/product.model";
import { AuthService } from "src/app/service/auth.service";


@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html'
})

export class ProductListComponent {


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
