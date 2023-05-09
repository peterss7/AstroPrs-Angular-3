import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { Vendor } from 'src/app/model/vendor.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  url: string = "http://localhost:8080/vendor";

  constructor(
    private http: HttpClient,
    private router: Router) { }

  list(): Observable<Vendor[]> {
      return this.http.get(this.url) as Observable<Vendor[]>;
  }
  get(id: number): Observable<Vendor> {

      return this.http.get(this.url + "/" + id) as Observable<Vendor>;
  }
  save(vendor: Vendor): void {
    this.http.post(this.url, vendor).subscribe(
      response => {
        console.log("vendor created successfully:", response);
      },
      error => {
        console.error("Error creating vendor:", error);
      }
    );
  }

  update(vendor: Vendor) {
      const url = this.url + "/" + vendor.id;
      console.log("url: " + url);
      console.log(vendor);
      console.log(JSON.stringify(vendor));
      return this.http.put(url, vendor, httpOptions).subscribe(
        response => {
          console.log("Vendor created successfully:", response);
        },
        error => {
          console.error("Error updating vendor:", error);
        }
      );
  }
  delete(id: number): void  {
      console.log("HELLO DELETE")
      this.http.delete(this.url + "/" + id).subscribe(() => {
        this.router.navigate(['/pagenotfound']);
        setTimeout(() => {
          this.router.navigate(['/vendor/list']);
        }, 500);
      }, (error) => {
        console.log("DELETION FAILED");
      });
  }
}
