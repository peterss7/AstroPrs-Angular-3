import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { AuthService } from 'src/app/service/auth.service';
import { ProductService } from 'src/app/service/product.service';
import { FormEditComponent } from 'src/app/shared/edit/form-edit/form-edit.component';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {

  @ViewChild('editForm') editForm!: FormEditComponent;

  product!: Product;
  id: number = 0;
  submitted: boolean = false;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params.subscribe(parms => this.id = parms['id']);
    this.productService.get(this.id).subscribe(
      v => this.product = v as Product,
      error => console.error("ERROR IN PRODUCT GET: ", error));

  }

  onEdit() {
    this.editForm.submit();
  }


}
