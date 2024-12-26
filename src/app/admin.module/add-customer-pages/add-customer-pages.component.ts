import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SupplierService } from '../../SupplierSide/SupplierServices/supplier.service';
import { ProductService } from '../../SupplierSide/SupplierServices/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-customer-pages',
  templateUrl: './add-customer-pages.component.html',
  styleUrls: ['./add-customer-pages.component.css']
})
export class AddCustomerPagesComponent implements OnInit {

  supplierData:any
   productForm!: FormGroup;
   constructor(
     private supplerservice:SupplierService,
      private fb:FormBuilder,
      private productService:ProductService ,
      public dialog: MatDialog,
      private toastr: ToastrService
     ){}
     
     ngOnInit(): void {
       this.supplerservice.GetAllSupplier().subscribe((res:any)=>{
         if(res != null)
         {
           this.supplierData = res
         }
       });
       
       this.productForm = this.fb.group({
         ProductName: ['', Validators.required],
         ProductDesc: ['', Validators.required],
         ProductOrignalprice: ['', Validators.required],
         ProductActualprice: ['', Validators.required],
         SupplierId: ['', Validators.required],
         ProductImages: this.fb.array([this.createFileControl()]) 
       });
     }
   
     get productImages(): FormArray {
       return this.productForm.get('ProductImages') as FormArray;
     }
     createFileControl(): FormGroup {
       return this.fb.group({
         file: [null, Validators.required]
       });
     }
   
     addFileInput() {
       this.productImages.push(this.createFileControl());
     }
   
     async AddProduct() {
     var ProductData = this.productForm.getRawValue();
     console.log(ProductData);
     
      (await this.productService.AddProduct(ProductData)).subscribe(res => {
       console.log(res);
       if(res != null)
       {
         this.toastr.success("Product added successfully");
       }
     })
   }
   CloseAddProductDailog() {
     this.dialog.closeAll();
   }   
}
