import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRegister } from '../../ClientSide/ClientModels/UserRegisterModel';
import { HttpClient } from '@angular/common/http';
import { endpoints } from '../../../endpoints/endpoints';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  User_Url = endpoints.User;
  constructor(private http: HttpClient) { }
  Register(IUser:UserRegister ):Observable<UserRegister>{
    return this.http.post<UserRegister>(`${this.User_Url}/AddUser`,IUser)
  }
}
