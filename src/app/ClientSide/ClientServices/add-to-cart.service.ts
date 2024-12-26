import { Injectable } from '@angular/core';
import { endpoints } from '../../../endpoints/endpoints';
import { AddToCart } from '../ClientModels/AddToCart';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  AddToCart_URL =endpoints.AddToCart
  constructor(private http:HttpClient) { }

    GetAllCartProducts(id:number):Observable<AddToCart>
    {
      return this.http.get<AddToCart>(`${this.AddToCart_URL}/GetAllCartProducts/${id}`);
    }
  AddCartProduct(product:AddToCart):Observable<AddToCart>
  {
    return this.http.post<AddToCart>(`${this.AddToCart_URL}/AddCartProduct`,product);
  }

  GetByIdCartProduct(id:number):Observable<AddToCart>
  {
    return this.http.get<AddToCart>(`${this.AddToCart_URL}/AddProduct/${id}`);
  }

  DeleteProductInCart(id:number):Observable<AddToCart>
  {
    return this.http.delete<AddToCart>(`${this.AddToCart_URL}/DeleteProductInCart/${id}`);
  }

  UpdateCartProduct(Product:AddToCart):Observable<AddToCart>
  {
    return this.http.put<AddToCart>(`${this.AddToCart_URL}/UpdateCartProduct`,Product);
  }
  isProductInCart(ProductId: number, userEmail: string) {
    return this.http.get<AddToCart>(`${this.AddToCart_URL}/isProductInCart?ProductId=${ProductId}&emailId=${userEmail}`);
  }
}
