import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';
import { Request } from 'src/app/model/request.model';
import { RequestLine } from 'src/app/model/request-line.model';
import { RequestLineService } from 'src/app/service/request-line.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request: Request = new Request();
  initialList: RequestLine[] = [];
  tempList: RequestLine[] = [];
  visibleList: RequestLine[] = [];
  id: number = 0;
  url!: string;
  isRequestLines: string = 'true';

  constructor(
    private router: Router,
    private requestService: RequestService,
    private requestLineService: RequestLineService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {



    this.route.params.subscribe(parms => this.id = parms['id']);

    this.requestService.get(this.id).subscribe(
      r => this.request = r as Request,
      error => console.error("ERROR IN REQUEST GET: ", error)
    );

    this.requestLineService.list().subscribe(rl => {
      this.initialList = rl;
      this.tempList = this.initialList.filter(requestLine => {
        return (requestLine.request.id === this.request.id)
      });

      this.url = '/request/detail/' + this.id;
    });
  }
}
