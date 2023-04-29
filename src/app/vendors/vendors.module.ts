import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorListComponent } from './vendor-list/vendor-list.component';



@NgModule({
  declarations: [
    VendorListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VendorListComponent
  ]

})
export class VendorsModule { }
