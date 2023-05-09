import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormCreateComponent } from 'src/app/shared/create/form-create/form-create.component';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {


  @ViewChild('createForm') createForm!: FormCreateComponent;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {

  }
  onCreate() {
    this.createForm.submit();
  }

}
