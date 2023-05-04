import { VendorService } from 'src/app/services/vendor.service';
import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/model/vendor.model';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit{


  vendor: Vendor = new Vendor();
  id: number = 0;

  constructor(
    private vendorService: VendorService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.vendorService.get(this.id).subscribe(v => this.vendor = v as Vendor);
  }
}
