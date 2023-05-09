import { DeletionService } from './../../service/deletion.service.service';
import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/model/request.model';
import { RequestService } from 'src/app/service/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ListTableComponent } from 'src/app/shared/list-table/list-table.component';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  pageTitle: string = "Request List";

  visibleRequests: Request[] = [];
  initialList: Request[] = [];
  requests: Request[] = [];
  request!: Request;
  startIndex!: number;
  endIndex: number = -10;
  loading = true;

  constructor(
    private requestService: RequestService,
    private router: Router,
    private route: ActivatedRoute,
    private deletionService: DeletionService
  ) { }

  ngOnInit(): void {
    this.requestService.list().subscribe(r => {
      this.initialList = r;
      this.visibleRequests = this.initialList.filter(request => {
        return (request.rejectionReason === null)
      }).slice(this.endIndex);

      this.loading = false;
    });
  }

  public delete(): void {
    this.deletionService.delete('REQUEST');
  }
  public getReviews(): void {
    this.router.navigate(['/request/review']);
  }
  public getPending(): void {

  }
}

