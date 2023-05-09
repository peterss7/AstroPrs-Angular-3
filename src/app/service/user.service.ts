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
    console.log(JSON.stringify(user) + " user as string in validation method");
    const stringyUser = JSON.stringify(user);
    return this.http.get(this.url + "/" + "validate" + user) as Observable<string>;

  }

  update(user: User): Observable<any> {

    const url = this.url + "/" + user.id;
    return this.http.put(url, JSON.stringify(user), httpOptions).pipe(
      map(response => response),
      catchError(error => {
        throw new Error(error);
      })
    );
  }

  deleteUserById(id: number): void {

    this.http.delete(this.url + "/" + id).subscribe(() => {
      this.router.navigate(['/pagenotfound']);
      setTimeout(() => {
        this.router.navigate(['/user/list']);
      }, 500);
    }, (error) => {
      console.log("DELETION FAILED");
    });
  }
}

