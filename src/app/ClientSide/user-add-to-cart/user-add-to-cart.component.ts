import { Component, OnInit } from '@angular/core';
import { AddToCartService } from '../ClientServices/add-to-cart.service';
import { AddToCart } from '../ClientModels/AddToCart';
import { log } from 'console';
import { ToastrService } from 'ngx-toastr';
import { json } from 'stream/consumers';

@Component({
  selector: 'app-user-add-to-cart',
  templateUrl: './user-add-to-cart.component.html',
  styleUrl: './user-add-to-cart.component.css'
})
export class UserAddToCartComponent implements OnInit  {

  cartItems:any =[];
  UserId=0;
  UserName="";
  totalAmount: number = 0;
  productprice:number = 0;
  discount: number = 0;
  finalPrice: number =0;

  constructor(private addToCartService: AddToCartService,private toster:ToastrService) { }
  ngOnInit(): void {
    this.getDataFromToken();
    this.getAllCartItems();
  }
    increaseQuantity(index: number) {
      this.cartItems[index].quantity++;
    }
    removeItem(products_id: number) {
      this.addToCartService.DeleteProductInCart(products_id).subscribe((res: any) => {
        if(res) {
          this.toster.success("Item removed successfully");
          this.cartItems = this.cartItems.filter((item: { ProductId: number; }) => item.ProductId!== products_id);
        }
      });
    }
    decreaseQuantity(index: number) {
      if (this.cartItems[index].quantity > 1)  {
        this.cartItems[index].quantity--;
      }
      else {
        this.toster.warning("Cannot decrease quantity less than 1");
      }
    }
    getAllCartItems() {
      this.addToCartService.GetAllCartProducts(this.UserId).subscribe((res:AddToCart)=>{
        this.cartItems = res.map((item: { quantity: any; }) => ({
          ...item,
          quantity: item.quantity || 1 
        }));
        this.cartItems.forEach((item: any) => {
            item.Product.forEach((item: any) => {
            this.productprice = item.productActualprice ?? 0; 
          })
          const qty = item.quantity ?? 1;            
          this.totalAmount += this.productprice * qty;    
      });
        console.log(this.cartItems);
      })
    
      
    }

    getDataFromToken()
    {
      const token = localStorage.getItem('user');
      if (token) {
        const parsedToken = JSON.parse(token); 
       this.UserId = parseInt(parsedToken.Id);
       this.UserName = parsedToken.Name;
      }
    }
 }
