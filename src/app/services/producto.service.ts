import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = 'http://localhost:4000/api/product/';

  constructor(private http: HttpClient) { }

  showProducts(): Observable<any>  {
    return this.http.get(this.url);
  }

  deleteProduct(id: string): Observable<any>  {
    return this.http.delete(this.url + 'delete-product/' + id);
  }

  createProduct(product: Producto): Observable<any> {
    return this.http.post(this.url + 'create-product', product);
  }

  showProduct(id: string): Observable<any> {
    return this.http.get(this.url + 'show-product/' + id)
  }

  editProduct(id: string, product: Producto): Observable<any> {
    return this.http.put(this.url + 'edit-product/' + id, product)
  }
}
