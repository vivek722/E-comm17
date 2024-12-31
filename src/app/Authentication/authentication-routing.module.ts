import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { CanActivate, canDeActivate } from './auth-guardng.guard';

const routes: Routes = [
  {path:'', redirectTo:'auth', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'UserRegister', component: UserRegisterComponent},
  {path:'UserHomePage', loadChildren: () => import('../ClientSide/client-side.module').then(m => m.ClientSideModule)},
  {path:'Supplier', loadChildren: () => import('../SupplierSide/supplier-side.module').then(m => m.SupplierSideModule)},
  {path:'Admin',loadChildren: () => import('../admin-side/admin-side.module').then(m => m.AdminSideModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
