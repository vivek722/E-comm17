import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoints } from '../../../endpoints/endpoints';
import { Supplier } from '../SupplierModels/Supplier';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

 
  Supplier_Url =endpoints.Supplier
  constructor(private http:HttpClient) { }

  GetAllSupplier():Observable<Supplier>
  {
    return this.http.get<Supplier>(`${this.Supplier_Url}/GetAllSuppliers`);
  }
  AddSuppliers(supllier:Supplier):Observable<Supplier>
  {
    return this.http.post<Supplier>(`${this.Supplier_Url}/AddSupplier`,supllier);
  }

  GetByIdSupplier(id:number):Observable<Supplier>
  {
    return this.http.get<Supplier>(`${this.Supplier_Url}/AddProduct ${id}`);
  }

  DeleteSupplier(id:number):Observable<Supplier>
  {
    return this.http.delete<Supplier>(`${this.Supplier_Url}/DeleteSupplier ${id}`);
  }

  UpdateSupplier(Product:Supplier):Observable<Supplier>
  {
    return this.http.put<Supplier>(`${this.Supplier_Url}/UpdateSupplier`,Product);
  }
}
