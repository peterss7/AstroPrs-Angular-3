import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:8080/users";

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

  update(user: User): Observable<User> {
    return this.http.put(this.url, User) as Observable<User>;
  }
  delete (id: number): Observable<User> {
    return this.http.delete(this.url + "/" + id) as Observable<User>;
  }
}
