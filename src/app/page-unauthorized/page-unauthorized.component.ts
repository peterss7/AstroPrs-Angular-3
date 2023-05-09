import { Component } from '@angular/core';

@Component({
  selector: 'app-page-unauthorized',
  templateUrl: './page-unauthorized.component.html',
  styleUrls: ['./page-unauthorized.component.css']
})
export class PageUnauthorizedComponent {
  showWarning: boolean = true;
  warningMessage: string = 'UNAUTHORIZED';
}
