import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { UserRegisterComponent } from './user-register/user-register.component';
@NgModule({
  declarations: [
    LoginComponent,
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class AuthenticationModule { }
