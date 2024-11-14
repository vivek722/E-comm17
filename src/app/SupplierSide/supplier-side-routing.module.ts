import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierSideNavbarComponent } from './supplier-side-navbar/supplier-side-navbar.component';
import { SupplierDeshboardComponent } from './supplier-deshboard/supplier-deshboard.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { InventoryDetailsComponent } from './inventory-details/inventory-details.component';

const routes: Routes = [
  {path:'',redirectTo:'DeshboardDesign',pathMatch:'full'},
  {
   path: '', 
   component: SupplierSideNavbarComponent,
   children: [
     {
       path: 'DeshboardDesign',
       component: SupplierDeshboardComponent
     },
     {
       path: 'ProductDetails',
       component: ProductsDetailsComponent
     },
     {
       path: 'InventoryDetails',
       component: InventoryDetailsComponent
     }
   ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierSideRoutingModule { }
