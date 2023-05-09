import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from 'src/app/model/request.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  url: string = "http://localhost:8080/request";

  constructor(private http: HttpClient) { }

  list(): Observable<Request[]> {
    return this.http.get(this.url) as Observable<Request[]>;
  }

  listBy(status: string): Observable<Request[]> {

    var searchUrl = '?';

    if (status === 'review'){
      searchUrl +=`review`;
    }
    else if (status ==='pending'){
      searchUrl +=`pending`
    }
    return this.http.get(this.url + searchUrl) as Observable<Request[]>;


  }

  get(id: number): Observable<Request> {
    return this.http.get(this.url + "/" + id) as Observable<Request>;
  }

  save(request: any): void {
    console.log(request);
    this.http.post(this.url, request).subscribe(
      response => {
        console.log("product created successfully:", response);
      },
      error => {
        console.error("Error creating request:", error);

      }
    );
  }

  update(request: any) {
    const url = this.url + "/" + request.id;
    console.log(request);
    return this.http.put(url, request, httpOptions).subscribe(
      response => {
        console.log("Request updated successfully:", response);
      },
      error => {
        console.error("Error updating product:", error);
      }
    );
  }
  review(request: any) {
    const url = this.url + "/" + request.id + "/review";
    console.log(request);
    return this.http.put(url, request, httpOptions).subscribe(
      response => {
        console.log("Request reviewed successfully:", response);
      },
      error => {
        console.error("Error updating product:", error);
      }
    );
  }
  reject(request: any) {
    const url = this.url + "/" + request.id + "/reject";
    console.log(request);
    return this.http.put(url, request, httpOptions).subscribe(
      response => {
        console.log("Request rejected successfully:", response);
      },
      error => {
        console.error("Error updating product:", error);
      }
    );
  }
  approve(request: any) {
    const url = this.url + "/" + request.id + "/approve";
    console.log(request);
    return this.http.put(url, request, httpOptions).subscribe(
      response => {
        console.log("Request appropved successfully:", response);
      },
      error => {
        console.error("Error updating product:", error);
      }
    );
  }
  delete (id: number): Observable<Request> {
    return this.http.delete(this.url + "/" + id) as Observable<Request>;
  }
}
