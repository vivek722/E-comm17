import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'UserHome',pathMatch:'full'},
  {path:'UserHome',loadChildren: () => import('./ClientSide/client-side.module').then(m => m.ClientSideModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
