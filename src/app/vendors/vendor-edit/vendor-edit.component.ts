import { Component } from '@angular/core';
import { Vendor } from 'src/model/vendor.model';
import { MOCK_VENDORS } from 'src/model/mock-vendors';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent {
  vendor: Vendor = MOCK_VENDORS[0];

  constructor() {}

  ngOnInit() {}
}
