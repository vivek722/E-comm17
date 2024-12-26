import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AddInventoryComponent } from '../add-inventory/add-inventory.component';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { InventoryService } from '../SupplierServices/inventory.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ToastrService } from 'ngx-toastr';
import { AddSupplierPagesComponent } from '../../admin.module/add-supplier-pages/add-supplier-pages.component';
import { AddCustomerPagesComponent } from '../../admin.module/add-customer-pages/add-customer-pages.component';
@Component({
  selector: 'app-inventory-details',
  templateUrl: './inventory-details.component.html',
  styleUrl: './inventory-details.component.css'
})
export class InventoryDetailsComponent {
  inventoryData:any[]=[];
  dataSource:any;
  isloding:boolean = false

  constructor(private _liveAnnouncer: LiveAnnouncer,public dialog: MatDialog,private Inventoryservice:InventoryService,private toastr: ToastrService){}
  @ViewChild(MatPaginator) paginatior!: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  ngOnInit(): void {
    this.displayInventoryData();
  }

displayedColumns: string[] = ['Product Image','Product Name','quantity','warehouse Name','location','Action'];

announceSortChange(sortState: Sort) {
  if (sortState.direction) {
    this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  } else {
    this._liveAnnouncer.announce('Sorting cleared');
  }
}
AddInventory(data?:any) {
  const dialogRef = this.dialog.open(AddInventoryComponent,{
    data,
  });
  dialogRef.afterClosed().subscribe(result => {
    this.displayInventoryData();
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
