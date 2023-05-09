import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { RequestLine } from 'src/app/model/request-line.model';
import { User } from 'src/app/model/user.model';
import { Vendor } from 'src/app/model/vendor.model';
import { Request } from 'src/app/model/request.model';
import { USER_TABLE_HEADERS } from '../../table-headers/user-headers';
import { VENDOR_TABLE_HEADERS } from '../../table-headers/vendor-headers';
import { PRODUCT_TABLE_HEADERS } from '../../table-headers/product-header';
import { REQUEST_TABLE_HEADERS } from '../../table-headers/request-header';
import { USER_DATA_IDS } from '../../table-data-ids/user-data-ids';
import { VENDOR_DATA_IDS } from '../../table-data-ids/vendor-data-ids';
import { PRODUCT_DATA_IDS } from '../../table-data-ids/product-data-ids';
import { REQUEST_DATA_IDS } from '../../table-data-ids/request-data-ids';
import { REQUEST_LINE_DATA_IDS } from '../../table-data-ids/request-line-data-ids';
import { USER_INPUT_TYPES } from '../../table-input-types/user-input-types';
import { VENDOR_INPUT_TYPES } from '../../table-input-types/vendor-input-types';
import { PRODUCT_INPUT_TYPES } from '../../table-input-types/product-input-types';
import { REQUEST_INPUT_TYPES } from '../../table-input-types/request-input-types';
import { REQUEST_LINE_INPUT_TYPES } from '../../table-input-types/request-line-input-types';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { RequestLineService } from 'src/app/service/request-line.service';
import { RequestService } from 'src/app/service/request.service';
import { UserService } from 'src/app/service/user.service';
import { VendorService } from 'src/app/service/vendor.service';
import { REQUEST_NEW_DATA_IDS } from '../../table-data-ids/request-new-data-ids';
import { REQUEST_NEW_HEADERS } from '../../table-headers/request-new-headers';
import { REQUEST_NEW_INPUT_TYPES } from '../../table-input-types/request-new-input-types';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {

  user: User = new User();
  vendor: Vendor = new Vendor();
  product: Product = new Product();
  request: Request = new Request();
  requestline: RequestLine = new RequestLine();
  REQUEST_LINE_HEADERS: string[] = ['Request Id', 'Product Id', 'Quantity'];

  object: any;
  tableHeaders!: string[];
  tableDataIds!: string[];
  tableInputTypes!: string[][];
  cardHeader!: string;

  options = [
    { label: 'Courier', value: 1},
    { label: 'Standard Shipping', value: 2},
    { label: 'Express Shipping', value: 3},
    { label: 'In-Person Pickup', value: 4},
    { label: 'Digital', value: 5},
    { label: 'White-Glove', value: 6},
    { label: 'Freight', value: 7}
  ];

  selectedOption: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
    private vendorService: VendorService,
    private productService: ProductService,
    private requestService: RequestService,
    private requestLineService: RequestLineService

  ) { }

  ngOnInit() {

    const url = window.location.href.split('/')[3];
    console.log(url);
    console.log("url component: " + url);

    setTimeout(() => {
      switch (url) {
        case 'user':
          this.object = new User();
          this.cardHeader = 'Enter new user values.';
          this.tableHeaders = USER_TABLE_HEADERS;
          this.tableDataIds = USER_DATA_IDS;
          this.tableInputTypes = USER_INPUT_TYPES;
          break;
        case 'vendor':
          this.object = new Vendor();
          this.cardHeader = 'Enter new vendor values';
          this.tableHeaders = VENDOR_TABLE_HEADERS;
          this.tableDataIds = VENDOR_DATA_IDS
          this.tableInputTypes = VENDOR_INPUT_TYPES;
          break;
        case 'product':
          this.object = new Product();
          this.cardHeader = "Enter new product values";
          this.tableHeaders = PRODUCT_TABLE_HEADERS;
          this.tableDataIds = PRODUCT_DATA_IDS
          this.tableInputTypes = PRODUCT_INPUT_TYPES;
          break;
        case 'request':
          this.object = new Request();
          this.cardHeader = 'Enter new request values';
          this.tableHeaders = REQUEST_NEW_HEADERS;
          this.tableDataIds = REQUEST_NEW_DATA_IDS;
          this.tableInputTypes = REQUEST_NEW_INPUT_TYPES;

          break;
        case 'requestline':
          this.object = new RequestLine();
          this.cardHeader = 'Request Line ID# ' + this.requestline;
          this.tableHeaders = this.REQUEST_LINE_HEADERS;
          this.tableDataIds = REQUEST_LINE_DATA_IDS;
          this.tableInputTypes = REQUEST_LINE_INPUT_TYPES;
      }
    }, 1000);
  }

  submit() {

    console.log("submitting create");
    const url = window.location.href.split('/')[3];

    switch (url) {
      case 'user':
        // this.userService.save(this.user);
        break;
      case 'vendor': ;
        this.vendorService.save(this.object)
        setTimeout(() => {
          this.router.navigateByUrl("/vendor/list");
        }, 500);
        break;
      case 'product':

      let newProduct = {
        partNumber: this.object.partNumber,
        name: this.object.name,
        unit: this.object.unit,
        price: this.object.price,
        photopath: this.object.photopath || null,
        vendorId: this.object.vendorId
      };

        this.productService.save(newProduct);
        setTimeout(() => {
          this.router.navigateByUrl("/product/list");
        }, 500);
        break;
      case 'request':

      var storedUser = localStorage.getItem('user_token');
        console.log(storedUser);
        if (storedUser != null){
          var {id} = JSON.parse(storedUser);
        }

        let newRequest = {
          description: this.object.description,
          rejectionReason: this.object.rejectionReason || null,
          justification: this.object.justification,
          dateNeeded: this.object.dateNeeded,
          deliveryMode: this.object.deliveryMode,
          userId: id
        }






        this.requestService.save(newRequest);
        setTimeout(() => {
          this.router.navigateByUrl("/request/list");
        }, 500);
        break;
      case 'requestline':
        this.requestLineService.save(this.object);
        setTimeout(() => {
          this.router.navigateByUrl("/request/list");
        }, 500);
        break;
    }
  }

  selectOption(option: any) {
    this.selectedOption = option;
  }

}



