import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent {

  deliveryModes = ['Courier', 'Standard Shipping', 'Express Shipping', 'In-Person Pickup', 'Digital', 'White-Glove', 'Freight'];

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(){
    const user = this.authService.getAuthorizedUser();

    if(!user){
      this.router.navigate(['user/login']);
    }

  }

  getNumbers(n: number): number[] {
    return Array.from({length: n}, (_, i) => i);
  }

  getDeliveryMode(index: number): string{

    console.log(this.deliveryModes[index]);

    return this.deliveryModes[index];
  }


}
