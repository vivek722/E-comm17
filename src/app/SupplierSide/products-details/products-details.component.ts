import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../SupplierServices/product.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { AddProductsComponent } from '../add-products/add-products.component';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { DeleteConfirmationDialogComponent } from '../../Shared/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent  implements OnInit {

  AllProducts: any[] = [];
  dataSource:any;
  isloding:boolean = false
constructor(private productService:ProductService,public dialog:MatDialog,private _liveAnnouncer:LiveAnnouncer,private toster:ToastrService){}

@ViewChild(MatPaginator) paginatior!: MatPaginator;
@ViewChild(MatSort) sort !: MatSort;

  ngOnInit(): void {
    this.displayProductData();
  }
displayedColumns: string[] = ['Product Image','Product Name', 'Product Description', 'Product Orignal Price', 'Product Offer Price','Action'];

AddProduct(data?:any) {
  const dialogRef = this.dialog.open(AddProductsComponent);
  dialogRef.afterClosed().subscribe(result => {
    if(result == true) {
      this.displayProductData();
    }
  });
  }
  displayProductData() {
    this.isloding = true;
    this.productService.GetAllProducts().subscribe((res:any)=>{
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
  DeleteProduct(id:number){
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent);
           dialogRef.afterClosed().subscribe(result => {
             if (result) {
               this.productService.DeleteProduct(id).subscribe((res:any)=>{
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
