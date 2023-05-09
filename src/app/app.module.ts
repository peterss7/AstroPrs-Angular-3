import { CookieService } from 'ngx-cookie-service';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsersModule } from './users/users.module';
import { VendorsModule } from './vendors/vendors.module';
import { ProductsModule } from './products/products.module';
import { RequestsModule } from './requests/requests.module';
import { ReactiveFormsModule } from '@angular/forms';



import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from './shared/shared.module';
import { AboutComponent } from './about/about.component';
import { PageUnauthorizedComponent } from './page-unauthorized/page-unauthorized.component';
import { ReviewListComponent } from './review/review-list/review-list.component';
import { ReviewerDetailComponent } from './review/reviewer-detail/reviewer-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    PagenotfoundComponent,
    MenuComponent,
    AboutComponent,
    PageUnauthorizedComponent,
    ReviewListComponent,
    ReviewerDetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VendorsModule,
    ProductsModule,
    RequestsModule,
    HttpClientModule,
    UsersModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
