import { Component, OnInit } from '@angular/core';
import {  WishlistService } from '../ClientServices/wishlist.service';
@Component({
  selector: 'app-user-wish-list',
  templateUrl: './user-wish-list.component.html',
  styleUrl: './user-wish-list.component.css'
})
export class UserWishListComponent  implements OnInit {
  WishListTitle = "WishList Products";
  WishListData:any;
  constructor(private WishlistService:WishlistService){}
  ngOnInit(): void {
   this.WishlistService.GetAllWishlistProducts().subscribe((res:any)=>{
      this.WishListData = res
      console.log(this.WishListData);
      
   }) 
  }
  products: any;
  AddToCart(arg0: any) {
  throw new Error('Method not implemented.');
  }
  
}
