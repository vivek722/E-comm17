import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AdminSupplierServiceService } from '../Admin-Service/admin-supplier-service.service';

@Component({
  selector: 'app-add-supplier-pages',
  templateUrl: './add-supplier-pages.component.html',
  styleUrl: './add-supplier-pages.component.css'
})
export class AddSupplierPagesComponent implements OnInit  {
supplierData:any
  AddsupplierPageForm!: FormGroup;
  constructor(
    private adminService:AdminSupplierServiceService,
     private fb:FormBuilder,
     public dialogref: MatDialogRef<AddSupplierPagesComponent>,
     private toastr: ToastrService
    ){}
    
    ngOnInit(): void {
      this.AddsupplierPageForm = this.fb.group({
        PageName: ['', Validators.required],
        IsPageActive: [],
        IsLoderActive: [],
        IsTosterActive: [],
        IsDeleteDialogActive:  [],
      });
    }

    async AddSupplierPage() {
    var CustomerPage = this.AddsupplierPageForm.getRawValue();
     (await this.adminService.AddSupplierPageSetting(CustomerPage)).subscribe((res:any) => {
      console.log(res);
      if(res != null)
      {
        this.toastr.success(res.message);
      }
    })
    this.dialogref.close(true);
  }
  CloseAddSupplierPageDailog() {
    this.dialogref.close(false);
  }   
}
