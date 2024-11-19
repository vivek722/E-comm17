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
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { UserCheckoutComponent } from './user-checkout/user-checkout.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    SupplierRegistrationComponent,
    ProductsDataComponent,
    UserAddToCartComponent,
    UserWishListComponent,
    UserHomeDesignComponent,
    UserHomeComponent,
    UserHeaderComponent,
    UserFooterComponent,
    UserCheckoutComponent
  ],
  imports: [
    CommonModule,
    ClientSideRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    SharedModule,
    MatIconModule,
    MatGridListModule,
    MatStepperModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
   
  ]
})
export class ClientSideModule { }
