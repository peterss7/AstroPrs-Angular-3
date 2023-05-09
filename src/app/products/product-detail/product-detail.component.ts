import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { Product } from 'src/app/model/product.model';
import { Vendor } from 'src/app/model/vendor.model';
import { AuthService } from 'src/app/service/auth.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent  implements OnInit{



  product: Product = new Product();
  id: number = 0;
  url!: string;

  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute,
    private authService: AuthService

  ) { }

  ngOnInit() {

    this.route.params.subscribe(parms => this.id = parms['id']);
    console.log("vendor search id: " + this.id);
    this.productService.get(this.id).subscribe(
      v => this.product = v as Product,
      error => console.error("ERROR IN VENDOR GET: ", error));
      this.url = '/product/edit/' + this.id;

  }
}
