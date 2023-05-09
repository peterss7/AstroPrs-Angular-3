import { DeletionService } from './../../service/deletion.service.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Request } from 'src/app/model/request.model';
import { RequestService } from 'src/app/service/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ListTableComponent } from 'src/app/shared/list-table/list-table.component';
import { REQUEST_REVIEW_HEADERS } from 'src/app/shared/table-headers/request-review-headers';
import { REQUEST_REVIEW_DATA_IDS } from 'src/app/shared/table-data-ids/request-review-data-ids';
import { REQUEST_REVIEW_INPUT_TYPES } from 'src/app/shared/table-input-types/request-review-input-types';


@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  @ViewChild('userIdInput') userIdInput!: ElementRef<HTMLInputElement>;

  pageTitle: string = "Review List";
  userIdInputNum!: number;
  visibleRequests: Request[] = [];
  tempList: Request[] = [];
  initialList: Request[] = [];
  requests: Request[] = [];
  request!: Request;
  startIndex!: number;
  endIndex: number = -10;
  loading = true;
  reviewState: string = 'DEFAULT';


  tableHeaders = REQUEST_REVIEW_HEADERS;
  tableDataIds = REQUEST_REVIEW_DATA_IDS;
  tableInputTypes = REQUEST_REVIEW_INPUT_TYPES;

  devRequests: Request[] = [];

  currentUserId: number = 0;
  selectedBoxes: number[] = [];

  constructor(
    private requestService: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {



    this.requestService.list().subscribe( rr => {
      this.devRequests = rr;
    });

    this.devRequests.forEach(request => {
      if (this.request.total <= 50 && this.request.total != 0){
        this.requestService.approve(request.id);
      }
    });

    const currentUserData = localStorage.getItem('user_key');

    if (currentUserData) {
      var { id } = JSON.parse(currentUserData);
    }

    if (id) {
      this.currentUserId = id;
    }

    this.requestService.listBy('review').subscribe(r => {
      this.initialList = r;
      this.tempList = this.initialList.filter(request => {
        return (request.status === 'PENDING'
          && request.user.id !== this.currentUserId)
      }).slice(this.endIndex);

      this.visibleRequests = this.tempList;



      this.loading = false;
    });


  }

  public getById() {

    this.loading = true;

    console.log("getting by userId");

    this.userIdInputNum = +this.userIdInput.nativeElement.value;



    this.tempList = [];

    console.log("logged in user: " + this.currentUserId);
    console.log("target user: " + this.userIdInputNum);

    this.requestService.listBy('review').subscribe(r => {
      this.initialList = r;
      this.tempList = this.initialList.filter(request => {

        return (request.status === 'PENDING'
          && request.user.id !== this.currentUserId
          && request.user.id === this.userIdInputNum);
      }).slice(this.endIndex);

      console.log('waiting...');
      setTimeout(() => {
        console.log('go...');
        this.visibleRequests = this.tempList;

        this.loading = false;
        this.reviewState = "REVIEWING"
      }, 1500);
      this.tempList.forEach((request) => {
        console.log("found requests: " + JSON.stringify(request));
      });
    });

    console.log(this.reviewState);
  }

  onCheckboxChange(id: number) {
    if (!this.selectedBoxes[id]) {
      this.selectedBoxes[id] = id;
    } else {
      this.selectedBoxes[id] = 0;
    }
  }



  onReview() {

    console.log("Reviewing.....");

    this.selectedBoxes.forEach((selectedId) => {

      let reviewedRequest = {
        id: selectedId,
      }

      this.requestService.review(reviewedRequest);

    });
    this.router.navigate(['/pagenotfound']);
    setTimeout(() => {
      this.router.navigate(['/review/list']);
    }, 500);
  }
}

