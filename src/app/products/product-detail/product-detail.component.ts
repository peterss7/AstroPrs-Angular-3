import { Component } from '@angular/core';
import { MOCK_PRODUCTS } from 'src/model/mock-products';
import { Product } from 'src/model/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product: Product = MOCK_PRODUCTS[0];

  constructor() {}
  ngOnInit() {}
}
