import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'Login',pathMatch:'full'},
  {path:'Login',loadChildren: () => import('./Authentication/authentication.module').then(m => m.AuthenticationModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
