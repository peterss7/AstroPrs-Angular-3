import { CurrentUser } from 'src/app/model/currentUser';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, delay, map, throwError } from 'rxjs';
import { User } from '../model/user.model';
import { Credential } from '../model/credential';
import { ActivatedRoute, Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:8080/user";
  currentUser!: Observable<CurrentUser>;
  justDeleted: boolean = false;


  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) { }

  list(): Observable<User[]> {
    return this.http.get(this.url) as Observable<User[]>;
  }
  get(id: number): Observable<User> {
    return this.http.get(this.url + "/" + id) as Observable<User>;
  }

  /*
  save(user: User): Observable<User> {
    console.log("saving user");
    console.log("user sent to saved: " + user);
    console.log("user sent to saved: " + JSON.stringify(user));
    return this.http.post(this.url, user) as Observable<User>;
  }
  */

  createUser(user: User): void {
    console.log("saving user");
    console.log("user sent to saved: " + user);
    console.log("user sent to saved: " + JSON.stringify(user));
    this.http.post(this.url, user).subscribe(
      response => {
        console.log("User created successfully:", response);
      },
      error => {
        console.error("Error creating user:", error);
      }
    );
  }


  login(credentials: Credential): Observable<CurrentUser> {
    console.log(credentials.getUsername() + " | " + credentials.getPassword() + " <== userservice login, these are credentials going out to spring.");
    return this.http.post<CurrentUser>(this.url + "/login", credentials).pipe(
      map(response => response as CurrentUser),
      catchError(error => {
        console.log("???login error: " + JSON.stringify(error));
        const message = error.error.message;
        throw new Error(message);
      })
    );
  }

  validate(user: string): Observable<string> {
    console.log(JSON.stringify(user) + "sdfsdfsdf");
    const stringyUser = JSON.stringify(user);
    return this.http.get(this.url + "/" + "validate" + user) as Observable<string>;

  }

  update(user: User): Observable<User> {
    return this.http.put(this.url, User) as Observable<User>;
  }
  deleteUserById(id: number): void {

    var idTest: number = 0;

    this.route.params.subscribe(parms => idTest = parms['id']);


    console.log("attempting to delete at index: " + id);
    console.log("URL: " + JSON.stringify(this.url + "/" + id));
    const deleteUrl = this.url + "/" + id;
    // console.log(deleteUrl);
    // return this.http.delete(this.url + "/" + id);

    const url = window.location.href;
    const urlComponents = url.split('/');

    console.log(urlComponents[3]);

    var originalUrl: string;

    if (urlComponents[4] == 'list'){
      originalUrl = this.router.url;
    }
    else{
      originalUrl = '/user/list';
    }

    console.log(urlComponents[3]);



    if (urlComponents[3] === 'user') {

      this.http.delete(deleteUrl).subscribe(() => {
        console.log("DELETION SUCCESSFUL");
        console.log(this.router.url);
        var nextUrl = this.router.url;
        console.log(this.router.parseUrl(this.router.url));


        this.router.navigate(['/pagenotfounddelete']);

        setTimeout(() => {
          // window.history.back();
          console.log('/' + nextUrl);
          this.router.navigate(['/' + originalUrl]);
          console.log(originalUrl);
        }, 500);


      }, (error) => {
        console.log("DELETION FAILED");
      });
    }
  }
}

