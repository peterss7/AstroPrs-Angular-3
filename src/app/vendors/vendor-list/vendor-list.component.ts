import { DeletionService } from './../../service/deletion.service.service';
import { Component, OnInit } from '@angular/core';
import { ListTableComponent } from 'src/app/shared/list-table/list-table.component';
import { Vendor } from 'src/app/model/vendor.model';
import { VendorService } from 'src/app/service/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  pageTitle: string = "Vendor List";

  visibleVendors: Vendor[] = [];
  vendors: Vendor[] = [];
  vendor!: Vendor;
  startIndex!: number;
  endIndex: number = -10;
  loading = true;

  constructor(
    private vendorService: VendorService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private deletionService: DeletionService
    ) { }

  ngOnInit(): void {
    this.vendorService.list().subscribe(v => {
      this.vendors = v;
      this.visibleVendors = this.vendors.slice(this.endIndex);
      this.loading = false;
    });
  }




  public delete(): void{
    this.deletionService.delete('VENDOR');
  }

}
