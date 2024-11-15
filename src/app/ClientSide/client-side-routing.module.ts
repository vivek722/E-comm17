import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeDesignComponent } from './user-home-design/user-home-design.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserWishListComponent } from './user-wish-list/user-wish-list.component';
import { UserAddToCartComponent } from './user-add-to-cart/user-add-to-cart.component';
import { SupplierRegistrationComponent } from './supplier-registration/supplier-registration.component';

const routes: Routes = [
  {path:'',redirectTo:'homePage',pathMatch:'full'},

  {path:'',component:UserHomeDesignComponent,
      children:[
        {path:'homePage',component:UserHomeComponent},
        {path:'Wishlist',component:UserWishListComponent},
        {path:'AddToCart',component:UserAddToCartComponent},
      ]
    },
    {path:'AddSupplier',component:SupplierRegistrationComponent},
    {path:'login',loadChildren: () => import('../Authentication/authentication.module').then(m => m.AuthenticationModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientSideRoutingModule { }
