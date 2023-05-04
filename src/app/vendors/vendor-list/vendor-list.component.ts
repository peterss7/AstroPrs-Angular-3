import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/model/vendor.model';
import { VendorService } from 'src/app/services/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit{

  pageTitle: string = "Vendor Detail"
  vendor: Vendor = new Vendor()
  id: number = 0 // initialize with dummy value

  vendors: Vendor[] = [];

  constructor(
    private vendorService: VendorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {

    // get the id from the url
    this.route.params.subscribe(params => this.id = params['id']);
    this.vendorService.get(this.id).subscribe(v => this.vendor = v as Vendor);

    this.vendorService.list().subscribe((vendors) => {
      this.vendors = vendors.slice(0,10);
    });
  }

  delete() {
    this.vendorService.delete(this.id).subscribe(jr => this.router.navigateByUrl("vendor/list"));
  }
}
