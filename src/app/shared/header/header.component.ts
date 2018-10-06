import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../../models/LoginDto';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/Category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginDto : LoginDto;
  categoryList : Array<Category> = [];
  constructor(private route : Router,private categoryService : CategoryService) { }

  ngOnInit() {

    this.loginDto = new LoginDto();

    this.loginDto = JSON.parse(localStorage.getItem("loginUser"));

    this.getAllMenus();
  }


  logout(){

    if(this.loginDto!=null){
      localStorage.removeItem("loginUser")
      this.route.navigate(["/login"])
    }
   
  }


  getAllMenus(){

    this.categoryService.getAllMenus().subscribe(response=>{
      
      this.categoryList = response.categoryDtoList;
    })

  }

}

window.onscroll = function() {myFunction()};



function myFunction() {

  var header : HTMLElement  = document.getElementById("myHeader");

  var sticky = header.offsetTop;

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
