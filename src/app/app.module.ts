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


import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    LoadingScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VendorsModule,
    ProductsModule,
    RequestsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
