import { Component } from '@angular/core';
import { MOCK_REQUESTS } from 'src/model/mock-requests';
import { Request } from 'src/model/request.model';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent {
  request: Request = MOCK_REQUESTS[0];

  constructor() {}

  ngOnInit() {}
}
