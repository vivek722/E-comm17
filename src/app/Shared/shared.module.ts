import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoderComponent } from './loder/loder.component';

@NgModule({
  declarations: [

  
    LoderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    LoderComponent
  ]
})
export class SharedModule { }
