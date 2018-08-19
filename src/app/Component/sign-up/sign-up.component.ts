import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LoginDto } from '../../models/LoginDto';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpModel : any;
  myformGroup : FormGroup;
  registerUser : LoginDto = new LoginDto();

  constructor(private formBuilder : FormBuilder, private toastr : ToastrService,private loginService : LoginService) { }

  ngOnInit() {

    this.myformGroup = this.formBuilder.group({
      email : new FormControl(),
      mobileNo : new FormControl(),
      firstName : new FormControl(),
      lastName : new FormControl(),
      gender : new FormControl(),
      userName : new FormControl(),
      password : new FormControl(),
      confirmPassword : new FormControl()
    })
  }


  register(){

  console.log(JSON.stringify(this.myformGroup.value));

   let password = this.myformGroup.value.password;
   let confirmPassword = this.myformGroup.value.confirmPassword;
   
    console.log(password +" == "+ confirmPassword)

   if(password == confirmPassword){
    this.registerUser = this.myformGroup.value;
    alert(JSON.stringify(this.registerUser))

    this.loginService.registerUser(this.registerUser).subscribe(res=>{
    alert(" response "+JSON.stringify(res))  
    });
   }else{
     this.toastr.error(' Password and confirm password should match')
   }




  }
}
