import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from 'src/app/app.component';




@NgModule({
  declarations: [

    AppComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [

    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserEditModule { }
