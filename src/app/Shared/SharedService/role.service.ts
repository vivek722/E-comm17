import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../SharedModel/Role';
import { HttpClient } from '@angular/common/http';
import { endpoints } from '../../../endpoints/endpoints';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  Role_Url = endpoints.Role
  constructor(private http:HttpClient) { }

  GetAllRole():Observable<Role>
  {
    return this.http.get<Role>(`${this.Role_Url}/GetAllRoles`);
  }
  AddSuppliers(Role:Role):Observable<Role>
  {
    return this.http.post<Role>(`${this.Role_Url}/AddRoles`,Role);
  }

  GetByIdSupplier(id:number):Observable<Role>
  {
    return this.http.get<Role>(`${this.Role_Url}/AddProduct ${id}`);
  }

  DeleteSupplier(id:number):Observable<Role>
  {
    return this.http.delete<Role>(`${this.Role_Url}/DeleteRoles ${id}`);
  }
  UpdateSupplier(Role:Role):Observable<Role>
  {
    return this.http.put<Role>(`${this.Role_Url}/UpdateRoles`,Role);
  }
}
