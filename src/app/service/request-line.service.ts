import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestLine } from 'src/app/model/request-line.model';

@Injectable({
  providedIn: 'root'
})
export class RequestLineService {

  url: string = "http://localhost:8080/requestlines";

  constructor(private http: HttpClient) { }

  list(): Observable<RequestLine[]> {
    return this.http.get(this.url) as Observable<RequestLine[]>;
  }

  get(id: number): Observable<RequestLine> {
    return this.http.get(this.url + "/" + id) as Observable<RequestLine>;
  }

  save(RequestLine: RequestLine): Observable<RequestLine> {
    return this.http.post(this.url, RequestLine) as Observable<RequestLine>;
  }

  update(RequestLine: RequestLine): Observable<RequestLine> {
    return this.http.put(this.url, RequestLine) as Observable<RequestLine>;
  }
  delete (id: number): Observable<RequestLine> {
    return this.http.delete(this.url + "/" + id) as Observable<RequestLine>;
  }
}
