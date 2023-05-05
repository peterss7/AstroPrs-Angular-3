import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/model/user.model';
import { Credential } from 'src/app/model/credential';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor() { }

  ngOnInit() { }

}
