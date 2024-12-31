import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoderComponent } from './loder/loder.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DeleteConfirmationDialogComponent } from './delete-confirmation-dialog/delete-confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    LoderComponent,
    DeleteConfirmationDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressSpinnerModule,
    MatDialogModule,
 
  ],
  exports:[
    LoderComponent
  ]
})
export class SharedModule { }
