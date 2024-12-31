import { Injectable } from '@angular/core';
import { endpoints } from '../../../endpoints/endpoints';
import { Observable } from 'rxjs';
import { Inventory } from '../SupplierModels/Inventory';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  Iventory_Url = endpoints.Inventory
  constructor(private http:HttpClient) { }

AddInventory(Iventory:Inventory): Observable<Inventory>
{
  const formData = new FormData();
    Object.entries(Iventory).forEach(([key, value]) => {
      formData.append(key, value);
    });
  return this.http.post<Inventory>(`${this.Iventory_Url}/AddInventory`,formData)
}

GetAllInventorys():Observable<Inventory>
{
  return this.http.get<Inventory>(`${this.Iventory_Url}/GetAllInventory`);
}

GetByIdInventory(id:number):Observable<Inventory>
{
  return this.http.get<Inventory>(`${this.Iventory_Url}/AddProduct ${id}`);
}

DeleteInventory(id:number):Observable<Inventory>
{
  return this.http.delete<Inventory>(`${this.Iventory_Url}/DeleteInventory ${id}`);
}

UpdateInventory(Product:Inventory):Observable<Inventory>
{
  return this.http.put<Inventory>(`${this.Iventory_Url}/UpdateInventory`,Product);
}
}
