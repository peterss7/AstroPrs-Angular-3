import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/model/vendor.model';
import { VendorService } from 'src/app/service/vendor.service';
import { FormCreateComponent } from 'src/app/shared/create/form-create/form-create.component';


@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent {

  @ViewChild('createForm') createForm!: FormCreateComponent;

  pageTitle: string = "Vendors List"
  vendors: Vendor[] = [];
  activeObjectType: string = "VENDOR";

  constructor(
    private vendorService: VendorService,
    private router: Router,
    ) {}

  ngOnInit() {

    this.vendorService.list().subscribe(jr => {
      this.vendors = jr as Vendor[];
    });
  }

  onCreate() {
    this.createForm.submit();
  }

}
