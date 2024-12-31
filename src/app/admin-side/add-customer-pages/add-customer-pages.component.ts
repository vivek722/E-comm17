import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AdminServiceService } from '../Admin-Service/admin-service.service';

@Component({
  selector: 'app-add-customer-pages',
  templateUrl: './add-customer-pages.component.html',
  styleUrl: './add-customer-pages.component.css'
})
export class AddCustomerPagesComponent implements OnInit {
 CustomerPageData:any
  AddCustomerPageForm!: FormGroup;
  constructor(
    private adminService:AdminServiceService,
     private fb:FormBuilder,
     public dialog: MatDialogRef<AddCustomerPagesComponent>,
     private toastr: ToastrService
    ){}
    
    ngOnInit(): void {
      this.AddCustomerPageForm = this.fb.group({
        PageName: ['', Validators.required],
        IsPageActive: [],
        IsLoderActive: [],
        IsTosterActive: [],
        IsDeleteDialogActive:  [],
      });
    }
  
    async AddCustomerPage() {
    var CustomerPage = this.AddCustomerPageForm.getRawValue();
     (await this.adminService.AddCustomerPageSetting(CustomerPage)).subscribe((res:any) => {
      console.log(res);
      if(res != null){
        this.toastr.success(res.message);
      }
    })
    this.dialog.close(true);
  }
  CloseAddCustomerDailog() {
    this.dialog.close(false);
  }   
}
