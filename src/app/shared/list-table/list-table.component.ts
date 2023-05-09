import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { USER_TABLE_HEADERS } from '../table-headers/user-headers';
import { VENDOR_TABLE_HEADERS } from '../table-headers/vendor-headers';
import { DeletionService } from 'src/app/service/deletion.service.service';
import { Product } from 'src/app/model/product.model';
import { RequestLine } from 'src/app/model/request-line.model';
import { Vendor } from 'src/app/model/vendor.model';
import { Request } from 'src/app/model/request.model';
import { PRODUCT_TABLE_HEADERS } from '../table-headers/product-header';
import { Router } from '@angular/router';
import { REQUEST_LIST_HEADERS } from '../table-headers/request-list-headers';




@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent implements OnInit {

  @Input()
  users!: User[];
  @Input()
  vendors!: Vendor[];
  @Input()
  products!: Product[];
  @Input()
  requests!: Request[];
  @Input()
  requestlines!: RequestLine[];
  @Input()
  isRequestLines: string = 'false';

  REQUEST_LINE_HEADERS: string[] = ['Request Id', 'Product Id', 'Quantity'];

  tableObjects!: any[];
  activeObjectType!: string;
  tableHeaders!: string[];
  selectedBoxes: number[] = [];


  constructor(
    private deletionService: DeletionService,
    private router: Router
  ) { }

  ngOnInit(): void {

    const url = window.location.href.split('/')[3];


    console.log(url);
    console.log(this.isRequestLines);
    console.log(url);
    console.log(this.isRequestLines);

    if(this.isRequestLines !== 'true'){
      switch (url) {
        case 'user':
          this.tableObjects = this.users;
          this.activeObjectType = 'USER';
          this.tableHeaders = USER_TABLE_HEADERS;
          break;
        case 'vendor':
          this.tableObjects = this.vendors;
          this.activeObjectType = 'VENDOR';
          this.tableHeaders = VENDOR_TABLE_HEADERS;
          break;
        case 'product':
          this.tableObjects = this.products;
          this.activeObjectType = 'PRODUCT';
          this.tableHeaders = PRODUCT_TABLE_HEADERS;
          break;
        case 'request':
          this.tableObjects = this.requests;
          this.activeObjectType = 'REQUEST';
          this.tableHeaders = REQUEST_LIST_HEADERS;
          break;
        case 'requestline':
          this.tableObjects = this.requestlines;
          this.activeObjectType = 'REQUEST_LINE';
          this.tableHeaders = this.REQUEST_LINE_HEADERS;
      }
    }
    else{
      this.activeObjectType = 'REQUEST_LINE';
      this.tableObjects = this.requestlines;
      this.tableHeaders = this.REQUEST_LINE_HEADERS;
    }
  }

  onCheckboxChange(id: number): void {
    if (!this.selectedBoxes[id]) {
      this.selectedBoxes[id] = id;
    } else {
      this.selectedBoxes[id] = 0;
    }
    this.deletionService.setSelectedForDeletion(this.selectedBoxes);
  }
}
