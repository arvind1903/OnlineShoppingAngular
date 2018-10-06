import { Component, OnInit } from '@angular/core';
import {ProductServicesService} from "../../services/product-services.service"
import {ProductDto} from "../../models/ProductDto";
import {FormGroup,FormBuilder,FormControl} from "@angular/forms";
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private service:ProductServicesService,private formbuilder:FormBuilder) { }


private product1:ProductDto;
private product:FormGroup;

  ngOnInit() {
    
    alert("uc")
    this.product=this.formbuilder.group({

productName:new FormControl(),productColor:new FormControl(),productPrice:new FormControl(),
productQuantity:new FormControl(),productDescription:new FormControl(),productSellerName:new FormControl(),

    });
  }

addProduct()
{
  this.product1=new ProductDto();
 

this.product1=this.product.value;

alert(JSON.stringify(this.product1));
  this.service.addProduct(this.product1).subscribe(res=>{

    alert(JSON.stringify(res))
  })


}




}
