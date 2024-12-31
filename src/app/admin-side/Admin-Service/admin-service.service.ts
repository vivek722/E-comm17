import { Injectable } from '@angular/core';
import { endpoints } from '../../../endpoints/endpoints';
import { HttpClient } from '@angular/common/http';
import { CustomerPageSetting } from '../Admin-Models/CutomerPageSetting';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
CustomerPageSetting_URL = endpoints.CustomerPagesSetting;
  constructor(private httpclient: HttpClient) { }

  AddCustomerPageSetting(customerPageSetting:CustomerPageSetting) :Observable<CustomerPageSetting>{
    return this.httpclient.post<CustomerPageSetting>(`${this.CustomerPageSetting_URL}/CustomerPageAdd`, customerPageSetting);
  }

  getAllCustomerPageSetting():Observable<CustomerPageSetting> 
  {
    return this.httpclient.get<CustomerPageSetting>(`${this.CustomerPageSetting_URL}/GetAllCustomerPage`);
  }
  getCustomerPagebyId(id:number) :Observable<CustomerPageSetting>
  {
    return this.httpclient.get<CustomerPageSetting>(`${this.CustomerPageSetting_URL}/GetCustomerPageById/${id}`);
  }
  deleteCustomerPage(id:number) :Observable<CustomerPageSetting>{
    return this.httpclient.delete<CustomerPageSetting>(`${this.CustomerPageSetting_URL}/DeleteCustomerPage/${id}`);
  }
  updateCustomerPage(customerPageSetting:CustomerPageSetting) :Observable<CustomerPageSetting>{
    return this.httpclient.put<CustomerPageSetting>(`${this.CustomerPageSetting_URL}/UpdateCustomerPage`, customerPageSetting);
  }
}
