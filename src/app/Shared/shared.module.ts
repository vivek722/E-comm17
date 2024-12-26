import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoderComponent } from './loder/loder.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    LoderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule
  ],
  exports:[
    LoderComponent
  ]
})
export class SharedModule { }
