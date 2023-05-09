import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './product.service';
import { RequestLineService } from './request-line.service';
import { RequestService } from './request.service';
import { UserService } from './user.service';
import { VendorService } from './vendor.service';
import { Product } from '../model/product.model';
import { RequestLine } from '../model/request-line.model';
import { Request } from '../model/request.model';
import { User } from '../model/user.model';
import { Vendor } from '../model/vendor.model';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  private editingUserSource = new Subject<User>();
  editingUser$ = this.editingUserSource.asObservable();

  private editingVendorSource = new Subject<Vendor>();
  editingVendor$ = this.editingVendorSource.asObservable();

  private editingProductSource = new Subject<Product>();
  editingProduct$ = this.editingProductSource.asObservable();

  private editingRequestSource = new Subject<Request>();
  editingRequest$ = this.editingRequestSource.asObservable();

  private editingRequestLineSource = new Subject<RequestLine>();
  editingRequestLine$ = this.editingRequestLineSource.asObservable();

  constructor(
    private userService: UserService,
    private vendorService: VendorService,
    private productService: ProductService,
    private requestService: RequestService,
    private requestLineService: RequestLineService,
    private router: Router,
  ) { }

  setEditingUser(user: User) {
    this.editingUserSource.next(user);
  }
  setEditingVendor(vendor: Vendor) {
    this.editingVendorSource.next(vendor);
  }
  setEditingProduct(product: Product) {
    this.editingProductSource.next(product);
  }
  setEditingRequest(request: Request) {
    this.editingRequestSource.next(request);
  }
  setEditingEequestine(requestline: RequestLine) {
    this.editingRequestLineSource.next(requestline);
  }


}

