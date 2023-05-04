import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestCreateComponent } from './request-create/request-create.component';


@NgModule({
  declarations: [
    RequestListComponent,
    RequestCreateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RequestListComponent
  ]
})
export class RequestsModule { }
