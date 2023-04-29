import { Component } from '@angular/core';
import { Vendor } from 'src/model/vendor.model';
import { MOCK_VENDORS } from 'src/model/mock-vendors';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent {
  vendor: Vendor = MOCK_VENDORS[0];

  constructor() {}

  ngOnInit() {}
}
