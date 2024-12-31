import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../../SupplierSide/SupplierServices/product.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { AddCustomerPagesComponent } from '../add-customer-pages/add-customer-pages.component';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AdminServiceService } from '../Admin-Service/admin-service.service';
import { DeleteConfirmationDialogComponent } from '../../Shared/delete-confirmation-dialog/delete-confirmation-dialog.component';

@Component({
  selector: 'app-customer-pages-setting',
  templateUrl: './customer-pages-setting.component.html',
  styleUrl: './customer-pages-setting.component.css'
})
export class CustomerPagesSettingComponent implements OnInit  {
 AllProducts: any[] = [];
  dataSource:any;
  isloding:boolean = false;
constructor(private AdminService:AdminServiceService,public dialog:MatDialog,private _liveAnnouncer:LiveAnnouncer){}

@ViewChild(MatPaginator) paginatior!: MatPaginator;
@ViewChild(MatSort) sort !: MatSort;

  ngOnInit(): void {
    this.displayProductData();
  }
displayedColumns: string[] = ['Index','Page Name','Page Active','Toster Message Active','Delete Dailog Active','Loader Active','Action'];

AddCustomerPage(data?:any) {
  const dialogRef = this.dialog.open(AddCustomerPagesComponent,{
    data,
  });
  dialogRef.afterClosed().subscribe(result => {
    if(result)
    {
      this.displayProductData();
    }
  });
}
  displayProductData() {
    this.isloding = true;
    this.AdminService.getAllCustomerPageSetting().subscribe((res:any)=>{
      this.AllProducts = res.data;  

      this.dataSource = new MatTableDataSource(this.AllProducts);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginatior;
      console.log(this.AllProducts);
    })  
    setTimeout(() => {
      this.isloding = false;
    }, 2000);
  }
  DeleteCustomerPage(id:number){
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.AdminService.deleteCustomerPage(id).subscribe((res:any)=>{
          console.log(res);
          this.displayProductData();
        })  
      }
    });
  }
announceSortChange(sortState: Sort) {
  if (sortState.direction) {
    this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  } else {
    this._liveAnnouncer.announce('Sorting cleared');
  }
}
}
