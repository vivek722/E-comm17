import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../SupplierSide/SupplierServices/product.service';
import { AddToCartService } from '../ClientServices/add-to-cart.service';
import { WishlistService } from '../ClientServices/wishlist.service';

@Component({
  selector: 'app-products-data',
  templateUrl: './products-data.component.html',
  styleUrl: './products-data.component.css'
})
export class ProductsDataComponent {

  products: any;
  AddToCartproducts!: FormGroup;
  Wishlistproducts!: FormGroup;
  WishListData: any[] = [];
  userId = 3;
  @Input() Title: string | undefined;
WishData: any;

  constructor(
    private productService: ProductService,
    private addToCartService: AddToCartService,
    private wishlistService: WishlistService,
    private formBuilder: FormBuilder,
    private tosterService: ToastrService 
  ) {}

  ngOnInit(): void {
    if(this.Title == "WishList Products")
    {
      this.wishlistService.GetAllWishlistProducts().subscribe((res: any) => {
        this.products = res;
        if (this.products) {
          console.log("This is a list of all products:", this.products);
        }
      });
    }
    else if(this.Title == "Trending Products")
    {
    this.productService.GetAllProducts().subscribe((res: any) => {
      this.products = res;
      if (this.products) {
        console.log("This is a list of all products:", this.products);
      }
    });
    }
  }

  AddToWishlist(ProductId: number) {
    this.Wishlistproducts = this.formBuilder.group({
      ProductId: [ProductId],
      UserId: [this.userId]
    });
    this.wishlistService.isProductInWishlist(ProductId, this.userId).subscribe((res: any) => {
      if (res) {
        this.tosterService.warning("Product already added In Wishlist")
      } else {
        this.wishlistService.AddWishlistProduct(this.Wishlistproducts.value).subscribe((res: any) => {
          if (res) {
            this.WishListData.push(this.Wishlistproducts.value); 
            this.tosterService.success("Product added successfully In Wishlist")
          }
        });
      }
    });
  }

  AddToCart(ProductId: number) {
    this.AddToCartproducts = this.formBuilder.group({
      ProductId: [ProductId],
      UserId: [this.userId],
      Quantity: [1]
    });
    this.addToCartService.isProductInCart(ProductId, this.userId).subscribe((res: any) => {
      if (res) {
        this.tosterService.warning("Product already added In Cart")
      } else {
        this.addToCartService.AddCartProduct(this.AddToCartproducts.value).subscribe((res: any) => {
          if (res) {
            this.WishListData.push(this.AddToCartproducts.value); 
            this.tosterService.success("Product added successfully In Cart")
          }
        });
      }
    });
  }
}
