import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit} from '@angular/core';
import { Credential } from 'src/app/model/credential';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CurrentUser } from 'src/app/model/currentUser';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ){


    console.log("building login form in loginform component constructor.");
    this.loginForm = formBuilder.group({
      username: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{7,30}$')]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,30}$')]),
    });

  }

  ngOnInit(): void {
    /*
    this.loginForm.valueChanges.subscribe((value) => {
      this.disabled = this.loginForm.invalid;
    });
    */
  }

  public onSubmitCredentials() {

    console.log("submitting credentials  <== in login-form.ts onSubmiteCredentials (login button clicked");


    const usernameInput = this.loginForm.get('username')!.value;
    const passwordInput = this.loginForm.get('password')!.value;

    var credentials = new Credential(usernameInput, passwordInput);
    console.log(usernameInput + " | " + passwordInput);

    this.authService.authenticate(credentials);

  }
}


