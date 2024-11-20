import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeDesignComponent } from './user-home-design/user-home-design.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserWishListComponent } from './user-wish-list/user-wish-list.component';
import { UserAddToCartComponent } from './user-add-to-cart/user-add-to-cart.component';
import { SupplierRegistrationComponent } from './supplier-registration/supplier-registration.component';
import { CanActivate } from '../Authentication/auth-guardng.guard';
import { UserCheckoutComponent } from './user-checkout/user-checkout.component';
import { LoginComponent } from '../Authentication/login/login.component';


const routes: Routes = [
  {path:'',redirectTo:'Client/homePage',pathMatch:'full'},

  {path:'Client',component:UserHomeDesignComponent,
      children:[
        {path:'homePage',component:UserHomeComponent},
        {path:'Wishlist',component:UserWishListComponent},
        {path:'AddToCart',component:UserAddToCartComponent},
      ]
    },
    {path:'AddSupplier',component:SupplierRegistrationComponent},
    {path:'auth',loadChildren: () => import('../Authentication/authentication.module').then(m => m.AuthenticationModule)},
    {path:'Supplier',loadChildren: () => import('../SupplierSide/supplier-side.module').then(m => m.SupplierSideModule)},
    {path:'Checkout',component:UserCheckoutComponent,canActivate:[CanActivate] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSideRoutingModule { }
