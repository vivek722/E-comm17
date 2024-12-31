import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSideRoutingModule } from './admin-side-routing.module';
import { AddCustomerPagesComponent } from './add-customer-pages/add-customer-pages.component';
import { CustomerPagesSettingComponent } from './customer-pages-setting/customer-pages-setting.component';
import { AdminSideNavbarComponent } from './admin-side-navbar/admin-side-navbar.component';
import { AdminDeshboardComponent } from './admin-deshboard/admin-deshboard.component';
import { MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import { MatButtonModule} from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../Shared/shared.module";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { SupplierPagesSettingComponent } from './supplier-pages-setting/supplier-pages-setting.component';
import { AddSupplierPagesComponent } from './add-supplier-pages/add-supplier-pages.component';
@NgModule({
  declarations: [
    AddCustomerPagesComponent,
    CustomerPagesSettingComponent,
    AdminSideNavbarComponent,
    AdminDeshboardComponent,
    SupplierPagesSettingComponent,
    AddSupplierPagesComponent
  ],
  imports: [
    CommonModule,
    AdminSideRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    SharedModule,
    MatButtonToggleModule
  ]
})
export class AdminSideModule { }
