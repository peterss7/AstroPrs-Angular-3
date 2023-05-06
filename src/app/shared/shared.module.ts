import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTableComponent } from './list-table/list-table.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { WarningMessageComponent } from './warning-message/warning-message.component';



@NgModule({
  declarations: [
    ListTableComponent,
    SpinnerComponent,
    WarningMessageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListTableComponent,
    SpinnerComponent,
    WarningMessageComponent
  ]
})
export class SharedModule { }
