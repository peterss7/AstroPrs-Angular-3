import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './product.service';
import { RequestLineService } from './request-line.service';
import { RequestService } from './request.service';
import { UserService } from './user.service';
import { VendorService } from './vendor.service';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  private isHidden$ = new BehaviorSubject<any>({});
  selectedIsHidden$ = this.isHidden$.asObservable();

  constructor(
    private userService: UserService,
    private vendorService: VendorService,
    private productService: ProductService,
    private requestService: RequestService,
    private requestLineService: RequestLineService,

    private router: Router,
  ) { }
}
