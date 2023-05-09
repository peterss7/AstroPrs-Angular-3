import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Product } from "src/app/model/product.model";
import { AuthService } from "src/app/service/auth.service";
import { DeletionService } from "src/app/service/deletion.service.service";
import { ProductService } from "src/app/service/product.service";
import { ListTableComponent } from 'src/app/shared/list-table/list-table.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  pageTitle: string = "Product List";

  visibleProducts: Product[] = [];
  products: Product[] = [];
  product!: Product;
  startIndex!: number;
  endIndex: number = -10;
  loading = true;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private deletionService: DeletionService
    ) { }




    ngOnInit(): void {
      this.productService.list().subscribe(v => {
        this.products = v;
        this.visibleProducts = this.products.slice(this.endIndex);

        this.loading = false;
      });
    }




  public delete(): void{
    this.deletionService.delete('PRODUCT');
  }

}
