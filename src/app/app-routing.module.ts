import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', pathMatch: 'full', redirectTo: 'home'},
  { path: 'login', pathMatch: 'full', redirectTo: 'login'},
  { path: 'users', pathMatch: 'full', redirectTo: 'users'},
  { path: 'vendors', pathMatch: 'full', redirectTo: 'vendors'},
  { path: 'products', pathMatch: 'full', redirectTo: 'products'},
  { path: 'requests', pathMatch: 'full', redirectTo: 'requests'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
