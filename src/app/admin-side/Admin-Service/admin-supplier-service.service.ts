import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoints } from '../../../endpoints/endpoints';
import { supplierPageSetting } from '../Admin-Models/SupplierPageSetting';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminSupplierServiceService {
 supplierSettingUrl = endpoints.SupplierPagesSetting
  constructor(private httpclient:HttpClient) { }

  AddSupplierPageSetting(supplierPageSetting:supplierPageSetting) : Observable<supplierPageSetting> { 
    return this.httpclient.post<supplierPageSetting>(`${this.supplierSettingUrl}/SupplierPageAdd`, supplierPageSetting);
  }

  getAllsupplierPage(): Observable<supplierPageSetting[]> {
    return this.httpclient.get<supplierPageSetting[]>(`${this.supplierSettingUrl}/GetAllSupplierPage`);
  }
  getsupplierPagebyId(id:number) :Observable<supplierPageSetting>
    {
      return this.httpclient.get<supplierPageSetting>(`${this.supplierSettingUrl}/GetCustomerPageById/${id}`);
    }
  deletesupplierPage(id:number) :Observable<supplierPageSetting>{
      return this.httpclient.delete<supplierPageSetting>(`${this.supplierSettingUrl}/DeleteCustomerPage/${id}`);
    }
  updatesupplierPage(customerPageSetting:supplierPageSetting) :Observable<supplierPageSetting>{
      return this.httpclient.put<supplierPageSetting>(`${this.supplierSettingUrl}/UpdateCustomerPage`, customerPageSetting);
  }
}
