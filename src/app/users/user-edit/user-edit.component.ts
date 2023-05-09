import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {

  user: User = new User();
  userOriginal: User = new User();
  id: number = 0;

  showWarning: boolean = false;
  showSpinner: boolean = false;
  showForm: boolean = true;
  warningMessage: string = '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.userService.get(this.id).subscribe(u => this.user = u as User);
    this.userService.get(this.id).subscribe(u2 => this.userOriginal = u2 as User);
  }

  validateData() {
    this.userService.validate(this.getSearchUrl()).subscribe((response) => {
      const { message } = JSON.parse(response);
      console.log(message);
    },
      (error: HttpErrorResponse) => {
        this.warningMessage = JSON.parse(JSON.stringify(error.error)).text;
      });
  }


  updateUser() {

    this.validateData()

    // console.log("edited user: " + JSON.parse(JSON.parse(JSON.stringify(this.user))));

    if (this.checkWarning()) {
      this.userService.update(this.user).subscribe(jr =>
        this.router.navigateByUrl("/user/list"));
    }


  }

  public checkWarning() {

    console.log(this.warningMessage);

    if (this.warningMessage != 'OK' && this.warningMessage != '') {
      console.log(this.warningMessage);
      this.showWarning = true;
      this.showForm = false;
      setTimeout(() => {
        this.showWarning = false;
        this.showForm = true;;
      }, 2500);
      return false;
    }

    if (!this.checkForm()) {

      this.warningMessage = "FORM INVALID";
      this.showWarning = true;
      console.log(this.warningMessage);
      setTimeout(() => {
        this.showWarning = false;
      }, 2500);
      return false;
    }

    return true;
  }

  public checkForm(): boolean {
    if (this.user.firstname == null
      && this.user.lastname == null
      && this.user.username == null
      && this.user.email == null
      && this.user.phone == null
      && this.user.isReviewer == this.userOriginal.isReviewer
      && this.user.isAdmin == this.userOriginal.isAdmin) {
      return false;
    }
    else {
      return true;
    }
  }

  public getSearchUrl(): string {
    let url = '?';
    if (this.user.firstname && (this.user.firstname != this.userOriginal.firstname)) {
      if (url.slice(-1) == "?") {
        url += `firstname=${this.user.firstname}`;
      }
      else {
        url += `&firstname=${this.user.firstname}`;
      }
    }
    if (this.user.lastname && (this.user.lastname != this.userOriginal.lastname)) {
      if (url.slice(-1) == "?") {
        url += `lastname=${this.user.lastname}`;
      }
      else {
        url += `&lastname=${this.user.lastname}`;
      }
    }
    if (this.user.username && (this.user.username != this.userOriginal.username)) {
      if (url.slice(-1) == "?") {
        url += `username=${this.user.username}`;
      }
      else {
        url += `&username=${this.user.username}`;
      }
    }
    if (this.user.email != this.userOriginal.email) {
      if (url.slice(-1) == "?") {
        url += `email=${this.user.email}`;
      }
      else {
        url += `&email=${this.user.email}`;
      }
    }
    if (this.user.phone != this.userOriginal.phone) {
      if (url.slice(-1) == "?") {
        url += `phone=${this.user.phone}`;
      }
      else {
        url += `&phone=${this.user.phone}`;
      }
    }
    if (this.user.isReviewer && (this.user.isReviewer != this.userOriginal.isReviewer)) {
      if (url.slice(-1) == "?") {
        url += `isReviewer=${this.user.isReviewer}`;
      }
      else {
        url += `&isReviewer=${this.user.isReviewer}`;
      }
    }
    if (this.user.isAdmin && (this.user.isAdmin != this.userOriginal.isAdmin)) {
      if (url.slice(-1) == "?") {
        url += `isAdmin=${this.user.isAdmin}`;
      }
      else {
        url += `&isAdmin=${this.user.isAdmin}`;
      };
    }
    return url;
  }
}

