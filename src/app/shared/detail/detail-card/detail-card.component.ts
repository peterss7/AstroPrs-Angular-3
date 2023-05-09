import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { RequestLine } from 'src/app/model/request-line.model';
import { User } from 'src/app/model/user.model';
import { Vendor } from 'src/app/model/vendor.model';
import { Request } from 'src/app/model/request.model';
import { PRODUCT_TABLE_HEADERS } from '../../table-headers/product-header';
import { REQUEST_TABLE_HEADERS } from '../../table-headers/request-header';
import { USER_TABLE_HEADERS } from '../../table-headers/user-headers';
import { VENDOR_TABLE_HEADERS } from '../../table-headers/vendor-headers';
import { USER_DATA_IDS } from '../../table-data-ids/user-data-ids';
import { VENDOR_DATA_IDS } from '../../table-data-ids/vendor-data-ids';
import { PRODUCT_DATA_IDS } from '../../table-data-ids/product-data-ids';
import { REQUEST_DATA_IDS } from '../../table-data-ids/request-data-ids';
import { REQUEST_LINE_DATA_IDS } from '../../table-data-ids/request-line-data-ids';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent {

  REQUEST_LINE_HEADERS: string[] = ['Request Id', 'Product Id', 'Quantity'];

  @Input()
  user!: User;
  @Input()
  vendor!: Vendor;
  @Input()
  product!: Product;
  @Input()
  request!: Request;
  @Input()
  requestline!: RequestLine;

  object: any;
  activeObjectType!: string;
  tableHeaders!: string[];
  tableDataIds!: string[];
  cardHeader!: string;


  ngOnInit(): void {


    const url = window.location.href.split('/')[3];

    console.log(url);

    console.log("url component: " + url);

    setTimeout(() => {



      switch (url) {
        case 'user':
          this.object = this.user;
          this.activeObjectType = 'USER';
          this.tableHeaders = USER_TABLE_HEADERS;
          this.tableDataIds = USER_DATA_IDS;
          break;
        case 'vendor':
          console.log("is it a good vendor?: " + this.object);
          this.object = this.vendor as Vendor;
          this.cardHeader = this.vendor.name;
          console.log("is it a good vendor?: " + JSON.stringify(this.object));
          this.activeObjectType = 'VENDOR';
          this.tableHeaders = VENDOR_TABLE_HEADERS;
          this.tableDataIds = VENDOR_DATA_IDS
          break;
        case 'product':
          this.object = this.product;
          this.activeObjectType = 'PRODUCT';
          this.tableHeaders = PRODUCT_TABLE_HEADERS;
          this.tableDataIds = PRODUCT_DATA_IDS
          break;
        case 'request':
          this.object = this.request;
          this.activeObjectType = 'REQUEST';
          this.tableHeaders = REQUEST_TABLE_HEADERS;
          this.tableDataIds = REQUEST_DATA_IDS
          break;
        case 'requestline':
          this.object = this.requestline;
          this.activeObjectType = 'REQUEST_LINE';
          this.tableHeaders = this.REQUEST_LINE_HEADERS;
          this.tableDataIds = REQUEST_LINE_DATA_IDS;
      }
    }, 1000);
  }
}
