import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/Category';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categoryList : Array<Category> = [];
  constructor(private categoryService : CategoryService) { }

  ngOnInit() {

    $(document).ready(function () {

      $('#sidebarCollapse').on('click', function (event) {
        
          $('#sidebar').toggleClass('active');
      });

      $('a').on('click',function(event){
        event.preventDefault();
      });
  
  });

  this.getAllMenus();
  }


  getAllMenus(){

    this.categoryService.getAllMenus().subscribe(response=>{
      
      this.categoryList = response.categoryDtoList;
    })

  }

}

