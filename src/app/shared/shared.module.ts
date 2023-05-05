import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTableComponent } from './list-table/list-table.component';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    ListTableComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListTableComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
