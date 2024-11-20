import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../../SupplierSide/SupplierServices/product.service';
import { AddToCartService } from '../ClientServices/add-to-cart.service';
import { WishlistService } from '../ClientServices/wishlist.service';
import { GetUserInformationService } from '../ClientServices/get-user-information.service';

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
  userId:any;
  @Input() Title: string | undefined;
  WishData: any;
  isloding: boolean = false;

  constructor(
    private productService: ProductService,
    private addToCartService: AddToCartService,
    private wishlistService: WishlistService,
    private formBuilder: FormBuilder,
    private userInformationService: GetUserInformationService,
    private tosterService: ToastrService 
  ) {}

  ngOnInit(): void {
    this.isloding = true;
    this.userId =  this.userInformationService.getDataFromToken();
    if(this.Title == "WishList Products")
    {
      this.wishlistService.GetAllWishlistProducts().subscribe((res: any) => {
        this.products = res.data;
        if (this.products) {
        }
      });
    }
    else if(this.Title == "Trending Products")
    {
    this.productService.GetAllProducts().subscribe((res: any) => {
      this.products = res.data;
      if (this.products) {
      }
    });
    }
    setTimeout(() => {
      this.isloding=false;
    }, 2000);
  }

  AddToWishlist(ProductId: number) {
    this.Wishlistproducts = this.formBuilder.group({
      ProductId: [ProductId],
      UserId: [parseInt(this.userId.Id)]
    });
    this.wishlistService.isProductInWishlist(ProductId, this.userId.Id).subscribe((res: any) => {
      if (res.message != "Empty") {
        this.tosterService.warning(res.message)
      } else {
        this.wishlistService.AddWishlistProduct(this.Wishlistproducts.value).subscribe((res: any) => {
          if (res.status == "Success") {
            this.WishListData.push(this.Wishlistproducts.value); 
            this.tosterService.success(res.message)
          }
          else
          {
            this.tosterService.error(res.message);
          }
        });
      }
    });
  }

  AddToCart(ProductId: number) {
    this.AddToCartproducts = this.formBuilder.group({
      ProductId: [ProductId],
      UserId: [parseInt(this.userId.Id)],
      Quantity: [1]
    });
    this.addToCartService.isProductInCart(ProductId, this.userId.Id).subscribe((res: any) => {
      if (res.message != "Empty") {
        this.tosterService.warning(res.message);
      } else {
        this.addToCartService.AddCartProduct(this.AddToCartproducts.value).subscribe((res: any) => {
          if (res.status == "Success") {
            this.WishListData.push(this.AddToCartproducts.value); 
            this.tosterService.success(res.message);
          }
          else
          {
            this.tosterService.error(res.message);
          }
        });
      }
    });
  }
}
