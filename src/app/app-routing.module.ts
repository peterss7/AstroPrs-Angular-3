import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductListComponent } from './products/products-list/products-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


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
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guard/authguard.service';
import { AdminGuard } from './guard/adminguard.service';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'product/create', component: ProductCreateComponent, canActivate: [AuthGuard ,AdminGuard]},
  { path: 'product/detail/:id', component: ProductDetailComponent, canActivate: [AuthGuard]},
  { path: 'product/edit/:id', component: ProductEditComponent, canActivate: [AuthGuard,AdminGuard]},
  { path: 'product/list', component: ProductListComponent, canActivate: [AuthGuard]},
  { path: 'request/create', component: RequestCreateComponent, canActivate: [AuthGuard,AdminGuard]},
  { path: 'request/detail/:id', component: RequestDetailComponent, canActivate: [AuthGuard]},
  { path: 'request/edit/:id', component: RequestEditComponent, canActivate: [AuthGuard,AdminGuard]},
  { path: 'request/list', component: RequestListComponent, canActivate: [AuthGuard]},
  { path: 'request/review', component: RequestReviewComponent, canActivate: [AuthGuard,AdminGuard]},
  { path: 'request/review-detail/:id', component: ReviewDetailComponent, canActivate: [AuthGuard]},
  { path: 'user/create', component: UserCreateComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'user/detail/:id', component: UserDetailComponent, canActivate: [AuthGuard]},
  { path: 'user/edit/:id', component: UserEditComponent, canActivate: [AuthGuard]},
  { path: 'user/list', component: UserListComponent, canActivate: [AuthGuard]},
  { path: 'user/login', component: UserLoginComponent},
  { path: 'vendor/create', component: VendorCreateComponent, canActivate: [AuthGuard]},
  { path: 'vendor/detail/:id', component: VendorDetailComponent, canActivate: [AuthGuard]},
  { path: 'vendor/edit/:id', component: VendorEditComponent, canActivate: [AuthGuard]},
  { path: 'vendor/list', component: VendorListComponent, canActivate: [AuthGuard]},
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
