import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/model/vendor.model';
import { AuthService } from 'src/app/service/auth.service';
import { VendorService } from 'src/app/service/vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent {

  pageTitle: string = "Vendors List"
  vendors: Vendor[] = [];

  constructor(
    private vendorService: VendorService,
    private router: Router,
    private authService: AuthService) {}

  ngOnInit() {

    const user = this.authService.getAuthorizedUser();

    if (!user) {
      this.router.navigate(['user/login']);
    }

    this.vendorService.list().subscribe(jr => {
      this.vendors = jr as Vendor[];
    });
  }
}
