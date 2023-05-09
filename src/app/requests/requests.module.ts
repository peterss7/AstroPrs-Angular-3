import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestCreateComponent } from './request-create/request-create.component';
import { RequestEditComponent } from './request-edit/request-edit.component';
import { RequestDetailComponent } from './request-detail/request-detail.component';
import { SharedModule } from '../shared/shared.module';
import { RequestReviewComponent } from './request-review/request-review.component';


@NgModule({
  declarations: [
    RequestListComponent,
    RequestCreateComponent,
    RequestEditComponent,
    RequestDetailComponent,
    RequestReviewComponent,

  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RequestListComponent,
    RequestDetailComponent
  ]
})
export class RequestsModule { }
