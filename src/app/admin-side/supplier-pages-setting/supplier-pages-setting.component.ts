import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { AddSupplierPagesComponent } from '../add-supplier-pages/add-supplier-pages.component';
import { MatTableDataSource } from '@angular/material/table';
import { AdminSupplierServiceService } from '../Admin-Service/admin-supplier-service.service';
import { DeleteConfirmationDialogComponent } from '../../Shared/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-supplier-pages-setting',
  templateUrl: './supplier-pages-setting.component.html',
  styleUrl: './supplier-pages-setting.component.css'
})
export class SupplierPagesSettingComponent  implements OnInit {
AllProducts: any[] = [];
  dataSource:any;
  isloding:boolean = false
constructor(private AdminService:AdminSupplierServiceService,public dialog:MatDialog,private _liveAnnouncer:LiveAnnouncer,private toster:ToastrService){}

@ViewChild(MatPaginator) paginatior!: MatPaginator;
@ViewChild(MatSort) sort !: MatSort;

  ngOnInit(): void {
    this.displayProductData();
  }
displayedColumns: string[] = ['Index','Page Name','Page Active','Toster Message Active','Delete Dailog Active','Loader Active','Action'];

AddSupplierPage(data?:any) {
  const dialogRef = this.dialog.open(AddSupplierPagesComponent,{
    data,
  });
  }
  displayProductData() {
    this.isloding = true;
    this.AdminService.getAllsupplierPage().subscribe((res:any)=>{
      this.AllProducts = res.data;  

      this.dataSource = new MatTableDataSource(this.AllProducts);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginatior;
    })  
    setTimeout(() => {
      this.isloding = false;
    }, 2000);
  }
  DeleteSupplierPage(id:number){
   const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent);
       dialogRef.afterClosed().subscribe(result => {
         if (result) {
           this.AdminService.deletesupplierPage(id).subscribe((res:any)=>{
            this.toster.success(res.message)
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
