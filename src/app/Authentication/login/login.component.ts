import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../AuthenticationService/authentication.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {


  constructor(private authservice: AuthenticationService,
    private formbuilder: FormBuilder,
    private route: Router,
    private tosterService: ToastrService 

  ) {}

  DataSource: FormGroup | null = null;

  ngOnInit(): void {
    this.DataSource = this.formbuilder.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required]
    });
  }

  LoginUser() {
    if (this.DataSource?.valid) {
      const LoginData = this.DataSource.getRawValue();
      this.authservice.login(LoginData).subscribe((res: any) => {
      if(res != null)
      {
       var RoleName = this.authservice.getToken()
       this.RoleBaseNavigation(RoleName)
    }
      });
    }
  }
 async  signInWithGoogle() {
    try {
      const user = await this.authservice.googleSignIn();
      console.log('Google Sign-In successful:', user);
      if(user != null)
      {
        const role = await this.authservice.checkRole(user.email) 
        console.log(role);
        
        this.RoleBaseNavigation(role)
      }
    } catch (error) {
      console.error('Error during Google Sign-In:', error);
    }
  }

  RoleBaseNavigation(RoleName : any)
  {
    if(RoleName == "Customer")
      {
        this.route.navigate(['/UserHome/Client/homePage']);
      }
      else if(RoleName == "Supplier")
      {
        this.route.navigate(['/UserHome/auth/Supplier/DeshboardDesign']);
        this.tosterService.success("login scussfully")
      }
  }
}
