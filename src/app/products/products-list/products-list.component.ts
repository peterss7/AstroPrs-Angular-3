import { Component } from "@angular/core";
import { Product } from "src/model/product.model";
import { MOCK_PRODUCTS } from "src/model/mock-products";

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html'
})

export class ProductListComponent {
  products: Product [] = MOCK_PRODUCTS;

  constructor() {}

  ngOnInit() {}
}
