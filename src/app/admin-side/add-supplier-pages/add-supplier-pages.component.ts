import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminServiceService } from '../Admin-Service/admin-service.service';
import { MatDialog } from '@angular/material/dialog';
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
     public dialog: MatDialog,
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

    openModal(): void {
      const dialogRef = this.dialog.open(AddSupplierPagesComponent, {
        width: '400px',
        data: { suppliers: this.supplierData }
      });
    
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('customer Page data:', result);
          this.AddsupplierPageForm.patchValue(result);
        }
      });
    }

    async AddSupplierPage() {
    var CustomerPage = this.AddsupplierPageForm.getRawValue();
     (await this.adminService.AddSupplierPageSetting(CustomerPage)).subscribe(res => {
      console.log(res);
      if(res != null)
      {
        this.toastr.success("Customer Page added successfully");
      }
    })
  }
  CloseAddSupplierPageDailog() {
    this.dialog.closeAll();
  }   
}
