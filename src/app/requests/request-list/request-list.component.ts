import { Component } from '@angular/core';
import { MOCK_REQUESTS } from 'src/model/mock-requests';
import { Request } from 'src/model/request.model';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent {
  requests: Request[] = MOCK_REQUESTS;
}
