import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  {path:'', redirectTo:'', pathMatch:'full'},
  {path:'', component: LoginComponent},
  {path:'UserRegister', component: UserRegisterComponent},
  {path:'UserHomePage', loadChildren: () => import('../ClientSide/client-side.module').then(m => m.ClientSideModule)},
  {path:'Supplier', loadChildren: () => import('../SupplierSide/supplier-side.module').then(m => m.SupplierSideModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
