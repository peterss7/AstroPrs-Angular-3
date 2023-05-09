import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { Router } from '@angular/router';
import { ProductUpdate } from '../model/product-update.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = "http://localhost:8080/product";

  constructor(
    private http: HttpClient,
    private router: Router,
    ) { }

  list(): Observable<Product[]> {
    return this.http.get(this.url) as Observable<Product[]>;
  }
  get(id: number): Observable<Product> {
    return this.http.get(this.url + "/" + id) as Observable<Product>;
  }

  save(product: any): void {
    console.log(product);
    this.http.post(this.url, product).subscribe(
      response => {
        console.log("product created successfully:", response);
      },
      error => {
        console.error("Error creating product:", error);
      }
    );
  }

  update(product: Product, id: number) {
    const url = this.url + "/" + id;
    console.log("product update url: " + url);
    console.log(product);
    console.log(JSON.stringify(product));
    return this.http.put(url, product, httpOptions).subscribe(
      response => {
        console.log("Vendor created successfully:", response);
      },
      error => {
        console.error("Error updating product:", error);
      }
    );
  }
  delete (id: number) {
    console.log("deleteing product");
    this.http.delete(this.url + "/" + id).subscribe(() => {
      this.router.navigate(['/pagenotfound']);
      setTimeout(() => {
        this.router.navigate(['/product/list']);
      }, 500);
    }, (error) => {
      console.log("DELETION FAILED");
    });
  }
}
