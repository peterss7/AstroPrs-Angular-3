import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/model/vendor.model';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent {

  pageTitle: string = "Vendors List"
  vendors: Vendor[] = [];

  constructor(
    private vendorService: VendorService) {}

  ngOnInit() {
    // subscribe to the list of vendors we get from the get request
    this.vendorService.list().subscribe(jsonResponse => {
      // add the data inside the returned JsonResponse to the array of vendors
      this.vendors = jsonResponse as Vendor[];
    });
  }
}
