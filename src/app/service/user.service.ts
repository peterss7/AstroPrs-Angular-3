import { CurrentUser } from 'src/app/model/currentUser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { User } from '../model/user.model';
import { Credential } from '../model/credential';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:8080/users";
  currentUser!: Observable<CurrentUser>;

  constructor(private http: HttpClient) { }

  list(): Observable<User[]> {
    return this.http.get(this.url) as Observable<User[]>;
  }
  get(id: number): Observable<User> {
    return this.http.get(this.url + "/" + id) as Observable<User>;
  }

  save(user: User): Observable<User> {
    return this.http.post(this.url, User) as Observable<User>;
  }


  login(credentials: Credential): Observable<CurrentUser>{
    console.log(credentials.getUsername() + " | " + credentials.getPassword() + " <== userservice login, these are credentials going out to spring.");

    /*
    this.currentUser = (this.http.post(this.url + "/login", credentials) as Observable<CurrentUser>);
    console.log(this.currentUser + " <== returned from good login in userService login");
    return this.currentUser;
    */



    return this.http.post<CurrentUser>(this.url + "/login", credentials).pipe(
      map(response => response as CurrentUser),
      catchError(error => {
        console.log("???login error: "  + error);
        const message = error.error.message;
        throw new Error(message);
      })
    );

  }

  update(user: User): Observable<User> {
    return this.http.put(this.url, User) as Observable<User>;
  }
  delete (id: number): Observable<User> {
    return this.http.delete(this.url + "/" + id) as Observable<User>;
  }
}
