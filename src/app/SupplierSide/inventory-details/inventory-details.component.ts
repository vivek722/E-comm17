import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AddInventoryComponent } from '../add-inventory/add-inventory.component';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { InventoryService } from '../SupplierServices/inventory.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ToastrService } from 'ngx-toastr';
import { DeleteConfirmationDialogComponent } from '../../Shared/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { AdminSupplierServiceService } from '../../admin-side/Admin-Service/admin-supplier-service.service';

@Component({
  selector: 'app-inventory-details',
  templateUrl: './inventory-details.component.html',
  styleUrl: './inventory-details.component.css'
})
export class InventoryDetailsComponent {
  inventoryData:any[]=[];
  pageSettings:any[]=[];
  dataSource:any;
  isloding:boolean = false

  constructor(private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    private Inventoryservice:InventoryService,
    private toastr: ToastrService,
    private adminSupplierPageService: AdminSupplierServiceService
  ){}
  @ViewChild(MatPaginator) paginatior!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  ngOnInit(): void {
    this.displayInventoryData();
  }

displayedColumns: string[] = ['Product Image','Product Name','quantity','warehouse Name','location','Action'];


getPageSettingValue(){
  // this.pageSettings = this.adminSupplierPageService.
}
announceSortChange(sortState: Sort) {
  if (sortState.direction) {
    this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  } else {
    this._liveAnnouncer.announce('Sorting cleared');
  }
}
AddInventory(data?:any) {
  const dialogRef = this.dialog.open(AddInventoryComponent);
  dialogRef.afterClosed().subscribe(result => {
    if (result == true) {
      this.displayInventoryData();
    }
});
}
DeleteInventory(id:number){
const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent);
       dialogRef.afterClosed().subscribe(result => {
         if (result) {
           this.Inventoryservice.DeleteInventory(id).subscribe((res:any)=>{
            this.toastr.success(res.message)
             this.displayInventoryData();
        })  
      }
   });
}
displayInventoryData() {

  this.isloding = true;
    this.Inventoryservice.GetAllInventorys().subscribe((res:any)=>{
      this.inventoryData = res.data
      console.log(res.data);
       this.dataSource = new MatTableDataSource(this.inventoryData);
       this.dataSource.paginator = this.paginatior;
       this.dataSource.sort = this.sort;
    })
    setTimeout(() => {
      this.isloding = false;
    }, 2000);
  }
}
