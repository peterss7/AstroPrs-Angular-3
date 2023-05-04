import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent {

  deliveryModes = ['Courier', 'Standard Shipping', 'Express Shipping', 'In-Person Pickup', 'Digital', 'White-Glove', 'Freight'];



  getNumbers(n: number): number[] {
    return Array.from({length: n}, (_, i) => i);
  }

  getDeliveryMode(index: number): string{

    console.log(this.deliveryModes[index]);

    return this.deliveryModes[index];
  }


}
