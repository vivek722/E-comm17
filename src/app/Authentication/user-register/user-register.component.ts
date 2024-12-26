import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoleService } from '../../Shared/SharedService/role.service';
import { UserRegisterService } from '../AuthenticationService/user-register.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent implements OnInit  {
  DataSource!: FormGroup;
  RoleData: any;
  
    constructor(
      private fb: FormBuilder,
      private  userregister: UserRegisterService,
      private Roleserver:RoleService,
      private router: Router,
      private tosterService: ToastrService 
    ) {
   
    }
    ngOnInit(): void {
      this.Roleserver.GetAllRole().subscribe((res:any)=>
        this.RoleData =res
      );
  
      this.DataSource = this.fb.group({
        UserName: ['', Validators.required],
        Email: ['', [Validators.required, Validators.email]],
        PasswordHash: ['', Validators.required],
        RoleId: [4],
        Street: [''],
        City: [''],
        State: [''],
        ZipCode: ['']
      });
    }
  
    RegisterUser() {
      var registerData = this.DataSource.getRawValue();
      this.userregister.Register(registerData).subscribe((res: any) => {
        if(res != null) {
          this.tosterService.success("Your registration was successfully Complete")
        }
    });
  }
}
