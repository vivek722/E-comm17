import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { AddCustomerPagesComponent } from '../add-customer-pages/add-customer-pages.component';
import { AddProductsComponent } from '../../SupplierSide/add-products/add-products.component';
import { AddSupplierPagesComponent } from '../add-supplier-pages/add-supplier-pages.component';

@Component({
  selector: 'app-supplier-pages-setting',
  templateUrl: './supplier-pages-setting.component.html',
  styleUrl: './supplier-pages-setting.component.css'
})
export class SupplierPagesSettingComponent {
AllProducts: any[] = [];
  dataSource:any;
  isloding:boolean = false
  displayedColumns: string[] = ['Index','Page Name', 'Action'];

constructor(public dialog:MatDialog,private _liveAnnouncer:LiveAnnouncer) {}
  
  @ViewChild(MatPaginator) paginatior!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  announceSortChange($event: Sort) {
    throw new Error('Method not implemented.');
  
  }
  AddCustomerPages() {
    const dialogRef = this.dialog.open(AddSupplierPagesComponent, {
      width: '600px',
      disableClose: true, // Prevent accidental closing
      autoFocus: true // Automatically focus on the first input
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed');
      // Perform any actions needed after closing the dialog
    });
  }
  

}
