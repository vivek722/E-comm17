import { Injectable } from '@angular/core';
import { Login } from '../AuthenticationModel/Login';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { endpoints } from '../../../endpoints/endpoints';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
  Auth_Url = endpoints.AUTH;
  private userSubject: BehaviorSubject<Login | null> = new BehaviorSubject<Login | null>(null);
  User : Observable<Login>= new  Observable<Login>; 
  constructor( private router: Router,
    private http: HttpClient,
) { }
    
    public get LoginUserValue():Login | null {
      return this.userSubject.value;  
    }
    login(IUser:Login):Observable<Login>{
      return this.http.post<Login>(`${this.Auth_Url}/Login`,IUser).pipe(
        map((user:any) => {
          localStorage.setItem('user',JSON.stringify(user))
          this.userSubject.next(user);
          return user;
        })
      );
    }
    logout():void{
      localStorage.removeItem('user');
      this.userSubject.next(null);
      this.router.navigate(['/Login']);
    }
    Userislogin():boolean{
      return localStorage.getItem('user')?true:false;
    }
    getUserRoleId(): string | null {
      const token = localStorage.getItem('user');
      if (token) {
        const decodedToken = this.getDecodedAccessToken(token);
        localStorage.setItem('user',JSON.stringify(decodedToken))
        return decodedToken ? decodedToken.Role : null; 
      }
      return null;
    }
    getDecodedAccessToken(token: string): any {
      try {
        return jwtDecode(token);
      } catch (Error) {
        console.error("Token decoding error:", Error);
        return null;
      }
    }
}
