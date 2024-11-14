import { Injectable } from '@angular/core';
import { endpoints } from '../../../endpoints/endpoints';
import { HttpClient } from '@angular/common/http';
import { WishList } from '../ClientModels/Wishlist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  
  WishList_Url =endpoints.WishList
  constructor(private http:HttpClient) { }

  GetAllWishlistProducts():Observable<WishList>
  {
    return this.http.get<WishList>(`${this.WishList_Url}/GetAllWishlistProducts`);
  }
  AddWishlistProduct(product:WishList):Observable<WishList>
  {
    return this.http.post<WishList>(`${this.WishList_Url}/AddWishlistProduct`,product);
  }

  GetByIdWishlistProduct(id:number):Observable<WishList>
  {
    return this.http.get<WishList>(`${this.WishList_Url}/AddProduct ${id}`);
  }

  DeleteWishlistProduct(id:number):Observable<WishList>
  {
    return this.http.delete<WishList>(`${this.WishList_Url}/DeleteWishlistProduct ${id}`);
  }

  UpdateWishlistProduct(Product:WishList):Observable<WishList>
  {
    return this.http.put<WishList>(`${this.WishList_Url}/UpdateWishlistProduct`,Product);
  }
  isProductInWishlist(productId: number, UserId: number): Observable<WishList> {
    return this.http.get<WishList>(`${this.WishList_Url}/isProductInWishlist?ProductId=${productId}&UserId=${UserId}`);
  }
}
