import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from 'src/app/model/request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  url: string = "http://localhost:8080/Requests";

  constructor(private http: HttpClient) { }

  list(): Observable<Request> {
    return this.http.get(this.url) as Observable<Request>;
  }
  get(id: number): Observable<Request> {
    return this.http.get(this.url + "/" + id) as Observable<Request>;
  }

  save(Request: Request): Observable<Request> {
    return this.http.post(this.url, Request) as Observable<Request>;
  }

  update(Request: Request): Observable<Request> {
    return this.http.put(this.url, Request) as Observable<Request>;
  }
  delete (id: number): Observable<Request> {
    return this.http.delete(this.url + "/" + id) as Observable<Request>;
  }
}
