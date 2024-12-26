import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierSideNavbarComponent } from './supplier-side-navbar/supplier-side-navbar.component';
import { SupplierDeshboardComponent } from './supplier-deshboard/supplier-deshboard.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { InventoryDetailsComponent } from './inventory-details/inventory-details.component';
import { SupplierSideRoutingModule } from './supplier-side-routing.module';
import { MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SharedModule } from "../Shared/shared.module";
@NgModule({
  declarations: [
    SupplierSideNavbarComponent,
    SupplierDeshboardComponent,
    AddProductsComponent,
    ProductsDetailsComponent,
    AddInventoryComponent,
    InventoryDetailsComponent
  ],
  imports: [
    CommonModule,
    SupplierSideRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    SharedModule
]
})
export class SupplierSideModule { }
