import { Component } from '@angular/core';
import { Product } from 'src/model/product.model';
import { MOCK_PRODUCTS } from 'src/model/mock-products';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  product: Product = MOCK_PRODUCTS[0];

  constructor() {}

  ngOnInit() {}
}
