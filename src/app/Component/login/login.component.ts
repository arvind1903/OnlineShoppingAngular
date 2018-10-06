import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../../models/LoginDto';
import { LoginService } from '../../services/login.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ResponseDto } from '../../models/ResponseDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetail : LoginDto
  model : LoginDto = new LoginDto();
  message : string;
  myForm : FormGroup;
  responseDto : ResponseDto;
  userModel : LoginDto;

  constructor(private loginService : LoginService,private formBuilder : FormBuilder,private route: Router) { }

  ngOnInit() {
    //this.loginDetail = new LoginDto();

    this.myForm = this.formBuilder.group({
      "userName" : new FormControl(),
      "password" : new FormControl()
    })
  }


  login(){
    this.userModel = new LoginDto();
    console.log(JSON.stringify(this.myForm.value));
    this.responseDto = new ResponseDto();
    this.loginDetail = new LoginDto();  
    this.loginDetail = this.myForm.value;

    
     this.loginService.login(this.loginDetail).subscribe(res=>{
      this.responseDto = JSON.parse(res._body);
     
      this.userModel = this.responseDto.loginDto

      alert(" reaponse "+JSON.stringify(this.userModel));

       if(this.userModel!=null && JSON.stringify(this.userModel)!=""){
        localStorage.setItem("loginUser",JSON.stringify(this.userModel));
        alert(" from local storage"+JSON.stringify(localStorage.getItem("loginUser")));
        this.message = " ";
        this.route.navigate(["/home"])
       }else{
        this.message ="invalid login Details"
       }


     })

    return false;

  }
}
