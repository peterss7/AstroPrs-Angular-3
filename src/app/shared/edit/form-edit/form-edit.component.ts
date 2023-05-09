import { USER_DATA_IDS } from './../../table-data-ids/user-data-ids';
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
import { VENDOR_DATA_IDS } from '../../table-data-ids/vendor-data-ids';
import { PRODUCT_DATA_IDS } from '../../table-data-ids/product-data-ids';
import { REQUEST_DATA_IDS } from '../../table-data-ids/request-data-ids';
import { REQUEST_LINE_DATA_IDS } from '../../table-data-ids/request-line-data-ids';
import { USER_INPUT_TYPES } from '../../table-input-types/user-input-types';
import { VENDOR_INPUT_TYPES } from '../../table-input-types/vendor-input-types';
import { PRODUCT_INPUT_TYPES } from '../../table-input-types/product-input-types';
import { REQUEST_INPUT_TYPES } from '../../table-input-types/request-input-types';
import { REQUEST_LINE_INPUT_TYPES } from '../../table-input-types/request-line-input-types';
import { ProductService } from 'src/app/service/product.service';
import { RequestLineService } from 'src/app/service/request-line.service';
import { RequestService } from 'src/app/service/request.service';
import { UserService } from 'src/app/service/user.service';
import { VendorService } from 'src/app/service/vendor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ProductUpdate } from 'src/app/model/product-update.model';






@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  REQUEST_LINE_HEADERS: string[] = ['Request Id', 'Product Id', 'Quantity'];

  user!: User;
  vendor: Vendor = new Vendor();
  product: Product = new Product();
  request!: Request;
  requestline!: RequestLine;

  activeForm = new FormGroup({});


  tableHeaders!: string[];
  tableDataIds!: string[];
  tableInputTypes!: string[][];
  cardHeader!: string;
  id!: number;



  constructor(
    private userService: UserService,
    private vendorService: VendorService,
    private productService: ProductService,
    private requestService: RequestService,
    private requestLineService: RequestLineService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    const url = window.location.href.split('/')[3];
    this.route.params.subscribe(params => this.id = params['id']);
    console.log(url);
    console.log("url component: " + url);

    switch (url) {
      case 'user':
        this.userService.get(this.id).subscribe(u =>
          this.user = u);
        var controls: AbstractControl<any>[] = [];
        USER_DATA_IDS.forEach((dataId, i) => {
          controls.push(new FormControl());
          this.activeForm.addControl(dataId, new FormControl(''));
        });
        this.cardHeader = 'edit the user';
        this.tableHeaders = USER_TABLE_HEADERS;
        this.tableDataIds = USER_DATA_IDS;
        this.tableInputTypes = USER_INPUT_TYPES;
        break;
      case 'vendor':
        setTimeout(() => {
          this.vendorService.get(this.id).subscribe(v =>
            this.vendor = v as Vendor);
        }, 500);
        this.cardHeader = "Edit the Vendor";
        this.tableHeaders = VENDOR_TABLE_HEADERS;
        this.tableInputTypes = VENDOR_INPUT_TYPES;
        this.tableDataIds = VENDOR_DATA_IDS
        var controls: AbstractControl<any>[] = [];
        VENDOR_DATA_IDS.forEach((dataId, i) => {
          controls.push(new FormControl());
          this.activeForm.addControl(dataId, new FormControl(''));
        });
        break;
      case 'product':
        this.productService.get(this.id).subscribe(p => {
          setTimeout(() => {
            this.product = p;
          }, 500);
        });
        this.cardHeader = "Edit the product";
        this.tableHeaders = PRODUCT_TABLE_HEADERS;
        this.tableDataIds = PRODUCT_DATA_IDS
        this.tableInputTypes = PRODUCT_INPUT_TYPES;
        var controls: AbstractControl<any>[] = [];
        PRODUCT_DATA_IDS.forEach((dataId, i) => {
          controls.push(new FormControl());
          this.activeForm.addControl(dataId, new FormControl(''));
        });
        break;
      case 'request':
        this.requestService.get(this.id).subscribe(r =>
          this.request = r);
        var controls: AbstractControl<any>[] = [];
        REQUEST_DATA_IDS.forEach((dataId, i) => {
          controls.push(new FormControl());
          this.activeForm.addControl(dataId, new FormControl(''));
        });

        this.cardHeader = 'Edit the Request';

        this.tableHeaders = REQUEST_TABLE_HEADERS;
        this.tableDataIds = REQUEST_DATA_IDS
        this.tableInputTypes = REQUEST_INPUT_TYPES;
        break;
      case 'requestline':
        this.requestLineService.get(this.id).subscribe(rl =>
          this.requestline = rl);
        var controls: AbstractControl<any>[] = [];
        REQUEST_LINE_DATA_IDS.forEach((dataId, i) => {
          controls.push(new FormControl());
          this.activeForm.addControl(dataId, new FormControl(''));
        });


        this.cardHeader = 'Edit the requestline';

        this.tableHeaders = this.REQUEST_LINE_HEADERS;
        this.tableDataIds = REQUEST_LINE_DATA_IDS;
        this.tableInputTypes = REQUEST_LINE_INPUT_TYPES;
        break;
    }

  }

  submit() {

    console.log("submitting update");
    const url = window.location.href.split('/')[3];


    switch (url) {
      case 'user':
        this.userService.update(this.user);
        break;
      case 'vendor': ;
        console.log("submitting vendor edit");
        console.log("form: " + JSON.stringify(this.activeForm.value));

        var editedVendor = this.activeForm.value as Vendor;

        if (editedVendor.code != null && editedVendor.code != '' && editedVendor.code != 'Code') {
          this.vendor.code = editedVendor.code;
        }
        if (editedVendor.name != null && editedVendor.name != '' && editedVendor.code != 'Name') {
          this.vendor.name = editedVendor.name;
        }
        if (editedVendor.address != null && editedVendor.address != '' && editedVendor.code != 'Address') {
          this.vendor.address = editedVendor.address;
        }
        if (editedVendor.city != null && editedVendor.city != '' && editedVendor.code != 'City') {
          this.vendor.city = editedVendor.city;
        }
        if (editedVendor.state != null && editedVendor.state != '' && editedVendor.code != 'State') {
          this.vendor.state = editedVendor.state;
        }
        if (editedVendor.zip != null && editedVendor.zip != '' && editedVendor.code != 'Zip') {
          this.vendor.zip = editedVendor.zip;
        }
        if (editedVendor.email != null && editedVendor.email != '' && editedVendor.code != 'Email') {
          this.vendor.email = editedVendor.email;
        }
        if (editedVendor.phone != null && editedVendor.phone != '' && editedVendor.code != 'Phone') {
          this.vendor.phone = editedVendor.phone;
        }


        this.vendorService.update(this.vendor)
        setTimeout(() => {
          this.router.navigateByUrl("/vendor/list");
        }, 500);

        break;
      case 'product':
        console.log("submitting product edit");
        console.log("form: " + JSON.stringify(this.activeForm.value));

        var editedProduct = this.activeForm.value as Product;

        console.log("form: " + JSON.stringify(editedProduct));

        console.log(editedProduct.partNumber);


        if (editedProduct.partNumber != null && editedProduct.partNumber != '' && editedProduct.partNumber != 'Part Number') {
          this.product.partNumber = editedProduct.partNumber;
        }
        if (editedProduct.name != null && editedProduct.name != '' && editedProduct.name != 'Name') {
          this.product.name = editedProduct.name;
        }
        if (editedProduct.unit != null && editedProduct.unit != '' && editedProduct.unit != 'Unit') {
          this.product.unit = editedProduct.unit;
        }
        if (editedProduct.price != null && editedProduct.price != 0) {
          this.product.price = editedProduct.price;
        }
        if (editedProduct.photopath != null && editedProduct.photopath != '' && editedProduct.photopath != 'Photopath') {
          this.product.photopath = editedProduct.photopath;
        }
        if (editedProduct.vendor && editedProduct.vendor.id != null && editedProduct.vendor.id != undefined) {
          this.product.vendor.id = editedProduct.vendor.id;
        }
        this.product.id = this.id;

        this.productService.update(this.product, this.id);
        setTimeout(() => {
          this.router.navigateByUrl("/product/list");
        }, 500);

        break;
      case 'request':

        console.log("submitting request edit");
        console.log("form: " + JSON.stringify(this.activeForm.value));

        var editedRequest = this.activeForm.value as Request;

        if (editedRequest.description != null && editedRequest.description != '' && editedRequest.description != 'Description') {
          this.request.description = editedRequest.description;
        }
        if (editedRequest.justification != null && editedRequest.justification != '' && editedRequest.justification != 'Justification') {
          this.request.justification = editedRequest.justification;
        }
        if (editedRequest.rejectionReason != null && editedRequest.rejectionReason != '' && editedRequest.rejectionReason != 'RejectionReason') {
          this.request.rejectionReason = editedRequest.rejectionReason;
        }
        if (editedRequest.deliveryMode != null && editedRequest.deliveryMode != '' && editedRequest.deliveryMode != 'Delivery Mode') {
          this.request.deliveryMode = editedRequest.deliveryMode;
        }
        if (editedRequest.submittedDate != null && editedRequest.submittedDate != '' && editedRequest.submittedDate != 'Submitted Date') {
          this.request.submittedDate = editedRequest.submittedDate;
        }
        if (editedRequest.dateNeeded != null && editedRequest.dateNeeded != '') {
          this.request.dateNeeded = editedRequest.dateNeeded;
        }
        if (editedRequest.status != null && editedRequest.status != '' && editedRequest.status != 'Status') {
          this.request.status = editedRequest.status;
        }
        if (editedRequest.total != null && editedRequest.total != 0) {
          this.request.total = editedRequest.total;
        }
        if (editedRequest.user.id != null && editedRequest.user.id != 0) {
          this.request.user.id = editedRequest.user.id;
        }

        this.requestService.update(this.request);
        setTimeout(() => {
          this.router.navigateByUrl("/request/list");
        }, 500);

        break;
      case 'requestline':
        console.log("submitting requestline edit");
        console.log("form: " + JSON.stringify(this.activeForm.value));

        var editedRequestLine = this.activeForm.value as RequestLine;

        if (editedRequestLine.request.id != null && editedRequestLine.request.id != 0) {
          this.requestline.request.id = editedRequestLine.request.id;
        }
        if (editedRequestLine.product.id != null && editedRequestLine.product.id != 0) {
          this.requestline.product.id = editedRequestLine.product.id;
        }
        if (editedRequestLine.quantity != null && editedRequestLine.quantity != 0) {
          this.requestline.quantity = editedRequestLine.quantity;
        }

        this.requestLineService.update(this.requestline);
        setTimeout(() => {
          this.router.navigateByUrl("/request/list");
        }, 500);

        break;
    }
  }

}

