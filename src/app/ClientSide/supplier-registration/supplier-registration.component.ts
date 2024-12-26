import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupplierService } from '../../SupplierSide/SupplierServices/supplier.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-supplier-registration',
  templateUrl: './supplier-registration.component.html',
  styleUrl: './supplier-registration.component.css'
})
export class SupplierRegistrationComponent {

  DataSource!: FormGroup;
  RoleData: any;
  
    constructor(
      private fb: FormBuilder,
      private supplierservice: SupplierService,
      private tosterService: ToastrService 
    ) {
   
    }
    ngOnInit(): void {
      this.DataSource = this.fb.group({
        UserName: ['', Validators.required],
        CompanyName:['', Validators.required],
        Password:['', Validators.required],
        RoleId: [3],
        Phone: ['', Validators.required],
        Email: ['', [Validators.required, Validators.email]],
        Street: ['', Validators.required],
        City: ['', Validators.required],
        State: ['', Validators.required],
        ZipCode: ['', Validators.required]
      });
    }
  
    RegisterSupplier() {
      var SupplierData = this.DataSource.getRawValue();
      this.supplierservice.AddSuppliers(SupplierData).subscribe((res: any) => {
        if(res != null) {
          this.tosterService.success("Your registration was successfully Complete")
        }
    });
  }
}
