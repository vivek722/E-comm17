import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UserFooterComponent,
    UserHeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    UserFooterComponent,
    UserHeaderComponent,
  ]
})
export class SharedModule { }
