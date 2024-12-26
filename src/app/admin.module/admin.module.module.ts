import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin.module-routing.module';
import { AdminDeshboardComponent } from './admin-deshboard/admin-deshboard.component';
import { AdminSideNavbarComponent } from './admin-side-navbar/admin-side-navbar.component';
import { SupplierPagesSettingComponent } from './supplier-pages-setting/supplier-pages-setting.component';
import { CustomerPagesSettingComponent } from './customer-pages-setting/customer-pages-setting.component';
import { MatSortModule} from '@angular/material/sort';
import { MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from "../Shared/shared.module";
import { AddCustomerPagesComponent } from './add-customer-pages/add-customer-pages.component';
import { AddSupplierPagesComponent } from './add-supplier-pages/add-supplier-pages.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AdminDeshboardComponent,
    AdminSideNavbarComponent,
    SupplierPagesSettingComponent,
    CustomerPagesSettingComponent,
    AddCustomerPagesComponent,
    AddSupplierPagesComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    SharedModule,
    ReactiveFormsModule
]
})
export class AdminModuleModule { }
