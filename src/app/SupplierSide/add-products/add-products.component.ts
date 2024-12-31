import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from '../SupplierServices/product.service';
import {  MatDialogRef } from '@angular/material/dialog';
import { SupplierService } from '../SupplierServices/supplier.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent implements OnInit {

  supplierData:any
  productForm!: FormGroup;
  constructor(
    private supplerservice:SupplierService,
     private fb:FormBuilder,
     private productService:ProductService ,
     public dialogRef: MatDialogRef<AddProductsComponent>,
     private toastr: ToastrService
    ){}
    
    ngOnInit(): void {
      this.supplerservice.GetAllSupplier().subscribe((res:any)=>{
        if(res != null)
        {
          this.supplierData = res.data;
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
    
     (await this.productService.AddProduct(ProductData)).subscribe((res:any) => {
      if(res != null){
        this.toastr.success(res.message);
      }
    });
    this.dialogRef.close(true);
  }
  CloseAddProductDailog() {
    this.dialogRef.close(false);
  }   
}
