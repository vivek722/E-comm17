import { Component, OnInit } from '@angular/core';
import { AddToCartService } from '../ClientServices/add-to-cart.service';

@Component({
  selector: 'app-user-add-to-cart',
  templateUrl: './user-add-to-cart.component.html',
  styleUrl: './user-add-to-cart.component.css'
})
export class UserAddToCartComponent implements OnInit  {

  constructor(private addToCartService:AddToCartService) { }
  quantity: number = 1;
  pricePerItem: number = 29.99;
  subtotal: any;
  tax: any;
  AddTocartData:any;

  ngOnInit(): void {
   this.addToCartService.GetAllCartProducts().subscribe((res:any)=>{
    this.AddTocartData = res
    console.log(this.AddTocartData);
    
   });
  }
  get totalAmount() {
    return (this.quantity * this.pricePerItem).toFixed(2);
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
  placeOrder() {
    console.log('Order placed for quantity:', this.quantity);
  }
  removeItem() {
    throw new Error('Method not implemented.');
  }
}
