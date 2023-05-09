import { VendorService } from 'src/app/service/vendor.service';
import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.model';
import {Router, ActivatedRoute } from '@angular/router';
import { DetailCardComponent } from 'src/app/shared/detail/detail-card/detail-card.component';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit{


  vendor: Vendor = new Vendor();
  id: number = 0;
  url!: string;

  constructor(
    private vendorService: VendorService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  ngOnInit() {

    this.route.params.subscribe(parms => this.id = parms['id']);
    console.log("vendor search id: " + this.id);
    this.vendorService.get(this.id).subscribe(
      v => this.vendor = v as Vendor,
      error => console.error("ERROR IN VENDOR GET: ", error));
      this.url = '/vendor/edit/' + this.id;

  }



}
