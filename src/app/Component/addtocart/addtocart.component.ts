import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {
  
  quantityList : Array<any> = [];
  constructor() { }

  ngOnInit() {
  
    for(let i=1;i <5;i++){
      this.quantityList.push(i);
    }
    
  }

}
