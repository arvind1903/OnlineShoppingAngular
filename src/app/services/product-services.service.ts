import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import{ProductDto} from "../models/ProductDto";

@Injectable({
  providedIn: 'root'
  })
export class ProductServicesService {

  headers: Headers;
  options: RequestOptions;

  url : string = "http://localhost:8181/demo/";

  constructor(private http : Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' })
    this.options = new RequestOptions({headers: this.headers})
}
addProduct(product:ProductDto)
{
alert(JSON.stringify(product))
return this.http.post(this.url+"addproduct",product);

}




}
