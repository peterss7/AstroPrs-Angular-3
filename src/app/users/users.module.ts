import { ReactiveFormsModule } from '@angular/forms';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserLoginModule } from './user-login/user-login.module';
import { UserCreateComponent } from './user-create/user-create.component';



@NgModule({
  declarations: [
    UserListComponent,
    UserLoginComponent,
    UserCreateComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,
    UserLoginModule,
    ReactiveFormsModule
  ],
  exports: [
  ]
})
export class UsersModule{

}
