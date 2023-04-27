import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductListComponent } from './products/products-list/products-list.component';

import { RequestCreateComponent } from './requests/request-create/request-create.component';
import { RequestDetailComponent } from './requests/request-detail/request-detail.component';
import { RequestEditComponent } from './requests/request-edit/request-edit.component';
import { RequestListComponent } from './requests/request-list/request-list.component';
import { RequestReviewComponent } from './requests/request-review/request-review.component';
import { ReviewDetailComponent } from './requests/review-detail/review-detail.component';

import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserLoginComponent } from './users/user-login/user-login.component';

import { VendorCreateComponent } from './vendors/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendors/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendors/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendors/vendor-list/vendor-list.component';
import { HomeContainerComponent } from './home/home-container/home-container.component';

const routes: Routes = [
  { path: '', component: HomeContainerComponent},
  { path: 'products/create', component: ProductCreateComponent},
  { path: 'products/detail/:id', component: ProductDetailComponent},
  { path: 'products/edit/:id', component: ProductEditComponent},
  { path: 'products/list', component: ProductListComponent},
  { path: 'requests/create', component: RequestCreateComponent},
  { path: 'requests/detail/:id', component: RequestDetailComponent},
  { path: 'requests/edit/:id', component: RequestEditComponent},
  { path: 'requests/list', component: RequestListComponent},
  { path: 'requests/review', component: RequestReviewComponent},
  { path: 'requests/review-detail/:id', component: ReviewDetailComponent},
  { path: 'users/create', component: UserCreateComponent},
  { path: 'users/detail/:id', component: UserDetailComponent},
  { path: 'users/edit/:id', component: UserEditComponent},
  { path: 'users/list', component: UserListComponent},
  { path: 'users/login', component: UserLoginComponent},
  { path: 'vendors/create', component: VendorCreateComponent},
  { path: 'vendors/detail/:id', component: VendorDetailComponent},
  { path: 'vendors/edit/:id', component: VendorEditComponent},
  { path: 'vendors/list', component: VendorListComponent},
  { path: '**', component: HomeContainerComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
