import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoints } from '../../../endpoints/endpoints';
import { Observable } from 'rxjs';
import { UserRegister } from '../ClientModels/UserRegisterModel';

@Injectable({
  providedIn: 'root'
})
export class GetUserInformationService {
 User_Url = endpoints.User;
  constructor(private http:HttpClient) { }

  GetUserInformation(id: number): Observable<UserRegister> {
    return this.http.get<UserRegister>(`${this.User_Url}/GetUserById/${id}`);
  }








  getDataFromToken()
  {
    const token = localStorage.getItem('user');
    if (token) {
      const parsedToken = JSON.parse(token); 
      return parsedToken;
    }
  }
}
