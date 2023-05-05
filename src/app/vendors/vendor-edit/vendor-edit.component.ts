import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/model/vendor.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent {


  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    const isAuthenticated = this.authService.getIsAuthenticated();

    if(!isAuthenticated){
      this.router.navigate(['user/login']);
    }
  }
}
