import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTableComponent } from './list-table/list-table.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { WarningMessageComponent } from './warning-message/warning-message.component';
import { FormEditComponent } from './edit/form-edit/form-edit.component';
import { DetailCardComponent } from './detail/detail-card/detail-card.component';
import { DetailButtonsComponent } from './detail/detail-buttons/detail-buttons.component';
import { FormCreateComponent } from './create/form-create/form-create.component';
import { ButtonsCreateComponent } from './create/buttons-create/buttons-create.component';
import { ButtonsEditComponent } from './edit/buttons-edit/buttons-edit.component';



@NgModule({
  declarations: [
    ListTableComponent,
    SpinnerComponent,
    WarningMessageComponent,
    FormEditComponent,
    FormEditComponent,
    DetailCardComponent,
    DetailButtonsComponent,
    FormEditComponent,
    FormCreateComponent,
    ButtonsCreateComponent,
    ButtonsEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ListTableComponent,
    SpinnerComponent,
    WarningMessageComponent,
    FormEditComponent,
    DetailCardComponent,
    DetailButtonsComponent,
    FormEditComponent,
    FormCreateComponent,
    ButtonsEditComponent,
    ButtonsCreateComponent
  ]
})
export class SharedModule { }
