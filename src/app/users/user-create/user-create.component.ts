import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';



@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User();
  createForm: FormGroup;
  showWarning: boolean = false;
  warningMessage = 'NO WARNING';


  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService

  ) {

    this.createForm = this.formBuilder.group({
      firstname: new FormControl(this.user.firstname,
        [
          Validators.required,
          Validators.minLength(3)
        ]),
      lastname: new FormControl(this.user.lastname,
        [
          Validators.required,
          Validators.pattern('^[A-Za-z]{2,30}$'),
        ]),
      username: new FormControl(this.user.username,
        [
          Validators.required
        ]),
      password: new FormControl(this.user.password,
        [
          Validators.required
        ]),
      email: new FormControl(this.user.email),
      phone: new FormControl(this.user.phone)
    });

  }

  ngOnInit() {




  }

  validateData() {
    this.userService.validate(this.getSearchUrl()).subscribe((response) => {
      console.log("validation response is: " + response);
    });
  }



  public getSearchUrl(): string {
    let url = '?';
    if (this.user.firstname) {
      console.log("the slice: " + url.slice(-1));
      console.log("the slice: " + url.slice(-1));
      if (url.slice(-1) == "?") {
        url += `firstname=${this.user.firstname}`;
      }
      else {
        url += `&firstname=${this.user.firstname}`;
      }

    }
    if (this.user.lastname) {
      if (url.slice(-1) == "?") {
        url += `lastname=${this.user.lastname}`;
      }
      else {
        url += `&lastname=${this.user.lastname}`;
      }
    }

    if (this.user.username) {
      if (url.slice(-1) == "?") {
        url += `username=${this.user.username}`;
      }
      else {
        url += `&username=${this.user.username}`;
      }
    }
    if (this.user.email) {
      if (url.slice(-1) == "?") {
        url += `email=${this.user.email}`;
      }
      else {
        url += `&email=${this.user.email}`;
      }
    }
    if (this.user.phone) {
      if (url.slice(-1) == "?") {
        url += `phone=${this.user.phone}`;
      }
      else {
        url += `&phone=${this.user.phone}`;
      }
    }
    if (this.user.isReviewer) {
      if (url.slice(-1) == "?") {
        url += `isReviewer=${this.user.isReviewer}`;
      }
      else {
        url += `&isReviewer=${this.user.isReviewer}`;
      }
    }
    if (this.user.isAdmin) {
      if (url.slice(-1) == "?") {
        url += `isAdmin=${this.user.isAdmin}`;
      }
      else {
        url += `&isAdmin=${this.user.isAdmin}`;
      };
    }

    console.log("URL: " + url);

    return url;
  }



  onCreateClick() {


    const createdUser = this.createForm.value;
    console.log(createdUser + "created user");

    this.user = createdUser;
    this.user.isAdmin = false;
    this.user.isReviewer = false;

    this.userService.validate(this.getSearchUrl()).subscribe((response) => {
      const { message } = JSON.parse(response);
      console.log(message);
    },
      (error: HttpErrorResponse) => {
        console.log("validation response is: " + JSON.stringify(error.error));
        console.log("validation response is: " + this.warningMessage);
        // var { text } = JSON.parse((JSON.stringify(error.error)));
        // console.log("TEXT: " + text);
        // this.warningMessage = { text } = JSON.parse((JSON.stringify(error.error)));
        console.log(this.warningMessage);

        const errorObject = JSON.parse(JSON.stringify(error.error));
        const errorText = errorObject.text;

        this.warningMessage = errorText;

        console.log(errorText + "???");
        console.log(this.warningMessage + "???");


        console.log("created user???");


        console.log(this.user.firstname + "created user");

        // this.validateData();

        if (this.checkWarning(errorText)) {
          this.user.isAdmin = false;
          this.user.isAdmin = false;
          console.log("passed check warning");
          this.userService.createUser(this.user);
        }

      }


    );





  }

  public checkWarning(errorText: string) {

    console.log(errorText + " is message");
    if (errorText != 'OK') {
      console.log("SHOWING WARNING");
      this.showWarning = true;
      setTimeout(() => {
        this.showWarning = false;
        console.log("STOPPING WARNING");
      }, 2500);
      return false;
    }

    if (this.createForm.invalid) {
      console.log("FORM INVALID");
      this.warningMessage = "FORM INVALID";
      console.log("SHOWING WARNING");
      this.showWarning = true;
      setTimeout(() => {
        this.showWarning = false;
        console.log("STOPPING WARNING");
      }, 2500);
      return false;
    }


    console.log(this.user.firstname + " user");
    console.log(this.user.lastname + " user");


    return true;



  }


}


