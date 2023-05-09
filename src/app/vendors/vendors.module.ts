import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { SharedModule } from '../shared/shared.module';
import { VendorDetailComponent } from './vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';



@NgModule({
  declarations: [
    VendorListComponent,
    VendorDetailComponent,
    VendorEditComponent,
    VendorCreateComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [

  ]

})
export class VendorsModule { }
