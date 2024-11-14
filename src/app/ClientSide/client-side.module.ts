import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientSideRoutingModule } from './client-side-routing.module';
import { SupplierRegistrationComponent } from './supplier-registration/supplier-registration.component';
import { ProductsDataComponent } from './products-data/products-data.component';
import { UserAddToCartComponent } from './user-add-to-cart/user-add-to-cart.component';
import { UserWishListComponent } from './user-wish-list/user-wish-list.component';
import { UserHomeDesignComponent } from './user-home-design/user-home-design.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from "../Shared/shared.module";
@NgModule({
  declarations: [
    SupplierRegistrationComponent,
    ProductsDataComponent,
    UserAddToCartComponent,
    UserWishListComponent,
    UserHomeDesignComponent,
    UserHomeComponent,
  ],
  imports: [
    CommonModule,
    ClientSideRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    SharedModule
  ]
})
export class ClientSideModule { }
