import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { AddCustomerPagesComponent } from '../add-customer-pages/add-customer-pages.component';
import { AddInventoryComponent } from '../../SupplierSide/add-inventory/add-inventory.component';

@Component({
  selector: 'app-customer-pages-setting',
  templateUrl: './customer-pages-setting.component.html',
  styleUrl: './customer-pages-setting.component.css'
})
export class CustomerPagesSettingComponent {
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
  AddCustomerPages(data?:any) {
    const dialogRef = this.dialog.open(AddInventoryComponent,{
      width: '600px', // Set an explicit width
      disableClose: true, // Prevent accidental closing
      data: data || {}, // Pass data if provided
      autoFocus: true, // Automatically focus on the first form input
    });
    dialogRef.afterClosed().subscribe(result => {
      this.displayInventoryData();
    });
  }
  displayInventoryData() {
    throw new Error('Method not implemented.');
  }
  
}
