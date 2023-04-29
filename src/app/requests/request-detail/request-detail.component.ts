import { Component } from '@angular/core';
import { MOCK_REQUESTS } from 'src/model/mock-requests';
import { Request } from 'src/model/request.model';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent {

  request: Request  = MOCK_REQUESTS[0];

  constructor() {}

  ngOnInit() {}
}
