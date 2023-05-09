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
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent implements OnInit {

  @ViewChild('userIdInput') userIdInput!: ElementRef<HTMLInputElement>;
  @ViewChild('rejectionInput') rejectionInput!: ElementRef<HTMLInputElement>;

  pageTitle: string = "Request Review List";
  userIdInputNum!: number;
  rejectionString!: string;
  visibleRequests: Request[] = [];
  tempList: Request[] = [];
  initialList: Request[] = [];
  requests: Request[] = [];
  request!: Request;
  startIndex!: number;
  endIndex: number = -10;
  loading = true;
  reviewState: string = 'DEFAULT';
  getRejectionReason: string = 'NOT_GETTING';

  tableHeaders = REQUEST_REVIEW_HEADERS;
  tableDataIds = REQUEST_REVIEW_DATA_IDS;
  tableInputTypes = REQUEST_REVIEW_INPUT_TYPES;

  currentUserId: number = 0;
  selectedBoxes: number[] = [];

  constructor(
    private requestService: RequestService,
    private router: Router,
    private route: ActivatedRoute,
    private deletionService: DeletionService
  ) { }

  ngOnInit(): void {


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
        return (request.status === 'REVIEW'
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

        return (request.status === 'REVIEW'
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
  }

  onCheckboxChange(id: number) {
    if (!this.selectedBoxes[id]) {
      this.selectedBoxes[id] = id;
    } else {
      this.selectedBoxes[id] = 0;
    }
  }



  onApprove() {

    console.log("APPROVING.....");

    this.selectedBoxes.forEach((selectedId) => {

      let approvedRequest = {
        id: selectedId,
      }

      this.requestService.approve(approvedRequest);

    });
    setTimeout(() => {
      this.router.navigate(['/request/list']);
    }, 500);
  }

  onReject() {

    console.log("REJECTED");

    this.rejectionString = this.rejectionInput.nativeElement.value;

    this.selectedBoxes.forEach((selectedId) => {

      let rejectedRequest = {
        id: selectedId,
        rejectionReason: this.rejectionString
      }



      this.requestService.reject(rejectedRequest);

      setTimeout(() => {
        this.router.navigate(['/request/list']);
      }, 500);

    })
  }

  onGetRejection(){
    this.getRejectionReason='GETTING';
    console.log(this.getRejectionReason);
  }

}

