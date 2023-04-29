import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestListComponent } from './request-list/request-list.component';


@NgModule({
  declarations: [
    RequestListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RequestListComponent
  ]
})
export class RequestsModule { }
