import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl : string = "http://localhost:8181/demo/";
  headers: Headers;
  options: RequestOptions;

  constructor(private http : HttpClient) {}

  getAllMenus(): Observable<any>{
   
    return this.http.get(this.baseUrl+"getAllCategory");
  }
}
