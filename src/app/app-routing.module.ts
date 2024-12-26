import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'Admin',pathMatch:'full'},
 //{path:'UserHome',loadChildren: () => import('./ClientSide/client-side.module').then(m => m.ClientSideModule)},
  {path:'Admin', loadChildren: () => import('./admin.module/admin.module.module').then(m => m.AdminModuleModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
