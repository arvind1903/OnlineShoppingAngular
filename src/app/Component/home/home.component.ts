import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../../models/LoginDto';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginDto : LoginDto;
  constructor() { }

  ngOnInit() {

    this.loginDto = JSON.parse(localStorage.getItem("loginUser"));
  }


}

