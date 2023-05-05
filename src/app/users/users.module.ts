import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserLoginModule } from './user-login/user-login.module';


@NgModule({
  declarations: [
    UserListComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserLoginModule
  ],
  exports: [
  ]
})
export class UsersModule{

}
