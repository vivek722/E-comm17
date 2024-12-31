import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoints } from '../../../endpoints/endpoints';
import { Product } from '../SupplierModels/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  product_Url = endpoints.Product
  constructor(private http:HttpClient) { }

   AddProduct(product:Product):Observable<Product>
  {
    const formData = new FormData();
    Object.entries(product).forEach(([key,value])=>{
      formData.append(key, value);
    })
    return  this.http.post<Product>(`${this.product_Url}/AddProduct`,formData);
  }

  GetAllProducts():Observable<Product>
  {
    return this.http.get<Product>(`${this.product_Url}/GetAllProducts`);
  }

  GetByIdProduct(id:number):Observable<Product>
  {
    return this.http.get<Product>(`${this.product_Url}/AddProduct/${id}`);
  }

  DeleteProduct(id:number):Observable<Product>
  {
    return this.http.delete<Product>(`${this.product_Url}/DeleteProduct/${id}`);
  }

  UpdateProduct(Product:Product):Observable<Product>
  {
    const formData = new FormData();
    Object.entries(Product).forEach(([key,value])=>{
      formData.append(key, value);
    })
    return this.http.put<Product>(`${this.product_Url}/UpdateProduct`,formData);
  }
}
