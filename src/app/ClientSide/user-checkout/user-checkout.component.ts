import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GetUserInformationService } from '../ClientServices/get-user-information.service';
import { AddToCartService } from '../ClientServices/add-to-cart.service';

@Component({
  selector: 'app-user-checkout',
  templateUrl: './user-checkout.component.html',
  styleUrl: './user-checkout.component.css'
})
export class UserCheckoutComponent implements OnInit{
  shippingForm: any;
  paymentForm: FormGroup;
  UserTokendata:any;
  UserData:any;
  UserProductDetail:any;
  products = [
    { name: 'Product 1', quantity: 2, price: 50 },
    { name: 'Product 2', quantity: 1, price: 30 },
  ];
  totalAmount = this.products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  UserName: any;

  constructor(private fb: FormBuilder,private getUserinformation:GetUserInformationService,private addToCartService:AddToCartService) {
  

    this.paymentForm = this.fb.group({
      paymentMethod: ['credit'],
      cardNumber: [''],
      expiryDate: [''],
      cvv: [''],
    });
  }
 
  ngOnInit(): void {
    this.UserTokendata = this.getUserinformation.getDataFromToken();
    this.getUserinformation.GetUserInformation(this.UserTokendata.Id).subscribe((res:any)=> {
    this.UserData = res;
  });
  this.UserProductDetail = this.addToCartService.GetAllCartProducts(this.UserTokendata.Id).subscribe((res:any)=>{
    this.UserProductDetail = res;
  });
  }
  placeOrder() {
    console.log('Order placed successfully!');
  }
 
}

