import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSideNavbarComponent } from './admin-side-navbar/admin-side-navbar.component';
import { AdminDeshboardComponent } from './admin-deshboard/admin-deshboard.component';
import { SupplierPagesSettingComponent } from './supplier-pages-setting/supplier-pages-setting.component';
import { CustomerPagesSettingComponent } from './customer-pages-setting/customer-pages-setting.component';

const routes: Routes = [
  {path:'',redirectTo:'Admin-Deshboard',pathMatch:'full'},
    {
     path: '', 
     component: AdminSideNavbarComponent,
     children: [
       {
         path: 'Admin-Deshboard',
         component: AdminDeshboardComponent
       },
       {
        path: 'Supplier-Pages-Details',
        component: SupplierPagesSettingComponent
      },
      {
        path: 'Customer-Pages-Details',
        component: CustomerPagesSettingComponent
      },
     ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
