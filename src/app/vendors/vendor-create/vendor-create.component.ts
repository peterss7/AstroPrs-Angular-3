import { Component } from '@angular/core';
import { MOCK_VENDORS } from 'src/model/mock-vendors';
import { Vendor } from 'src/model/vendor.model';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent {
  vendor: Vendor = MOCK_VENDORS[0];

  constructor() {}

  ngOnInit() {}
}
