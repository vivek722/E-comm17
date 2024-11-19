import { inject } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthenticationService } from './AuthenticationService/authentication.service';

export const CanActivate = ()=>{
const authservice = inject(AuthenticationService);
const router = inject(Router);
if(authservice.Userislogin())
{
  return true;
}
else
{
  router.navigate(['/UserHome/auth/login']);
  return false;
}
}
export const canDeActivate = ()=>{
  const authservice = inject(AuthenticationService);
  const router = inject(Router);
  if(!authservice.Userislogin())
  {
    return true;
  }
  else
  {
   const RoleName = authservice.getToken()
   if(RoleName == "Customer")
    {
      router.navigate(['/UserHome/homePage']);
    }
    else if(RoleName == "Supplier")
    {
      router.navigate(['UserHome/auth/Supplier/DeshboardDesign']);
    }
    return false;
  }
  }