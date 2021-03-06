import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/operators';
import { Http, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoginDto } from '../models/LoginDto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  headers: Headers;
  options: RequestOptions;

  url : string = "http://localhost:8181/demo/";
  constructor(private http : Http) { 

    this.headers = new Headers({ 'Content-Type': 'application/json' })
    this.options = new RequestOptions({headers: this.headers})
  }


  login(login : LoginDto): Observable<any> {
    return this.http.post(this.url+"authLogin",{"userName" : login.userName, "password" : login.password},this.options);    
  }


  registerUser(login : LoginDto){
    return this.http.post(this.url+"register",login);
  }


  changePassword(login : LoginDto): Observable<any> {

    alert(" service "+JSON.stringify(login))
    return this.http.post(this.url+"forgotPassword",login)
  }
}
