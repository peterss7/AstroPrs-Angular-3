import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';
import { ProductService } from './product.service';
import { RequestLineService } from './request-line.service';
import { RequestService } from './request.service';
import { VendorService } from './vendor.service';

@Injectable({
  providedIn: 'root'
})
export class DeletionService {

  /*
  private currentSelection$ = new BehaviorSubject<any>({});
  idCurrentSelection$ = this.currentSelection$.asObservable();
  */

  private currentSelection: number[] = [];

  constructor(
    private userService: UserService,
    private vendorService: VendorService,
    private productService: ProductService,
    private requestService: RequestService,
    private requestLineService: RequestLineService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  public setSelectedForDeletion(idIndexes: number[]): void {



    // this.currentSelection$.next(idIndexes);
    this.currentSelection = idIndexes;

    console.log(idIndexes);
    // console.log(this.currentSelection$);
  }

  public deleteTypeById(id: number, targetType: string) {

    const url = window.location.href.split('/')[3];


    switch (url) {
      case 'user':
        this.userService.deleteUserById(id);
        break;
      case 'vendor':
        this.vendorService.delete(id);
        break;
      case 'product':
        this.productService.delete(id);
        break;
      case 'request':
        this.requestService.delete(id);
        break;
      case 'requestline':
        this.requestLineService.delete(id);
        break;
    }
  }

  public delete(targetType: string): void {


    for (let id of this.currentSelection) {
      switch (targetType) {
        case 'USER':
          if (id != 0) {
            this.userService.deleteUserById(id);
            this.router.navigate(['/pagenotfound']);
            setTimeout(() => {
              this.router.navigate(['/user/list']);
            }, 500);
          }
          break;
        case 'VENDOR':
          console.log('VENDOR');
          if (id != 0) {
            console.log(id);
            this.vendorService.delete(id);
            this.router.navigate(['/pagenotfound']);
            setTimeout(() => {
              this.router.navigate(['/vendor/list']);
            }, 500);
          }
          break;
        case 'PRODUCT':
          if (id) {
            console.log("delete product of id: " + id);
            this.productService.delete(id);
          }
          this.router.navigate(['/pagenotfound']);
            setTimeout(() => {
              this.router.navigate(['/product/list']);
            }, 500);
          break;
        case 'REQUEST':
          if (id) {
            this.requestService.delete(id);
          }
          this.router.navigate(['/pagenotfound']);
            setTimeout(() => {
              this.router.navigate(['/request/list']);
            }, 500);
          break;
        case 'REQUESTLINE':
          if (id) {
            this.requestLineService.delete(id);
          }
          this.router.navigate(['/pagenotfound']);
            setTimeout(() => {
              this.router.navigate(['/request/list']);
            }, 500);
          break;
      }


    }




  }


}
