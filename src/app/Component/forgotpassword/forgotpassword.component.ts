import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { LoginDto } from '../../models/LoginDto';
import { LoginService } from '../../services/login.service';
import { ResponseDto } from '../../models/ResponseDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  forgotPwdFrm : FormGroup;
  userDto : LoginDto;
  loggedInUser : LoginDto;
  status : Number;
  response : ResponseDto;
  constructor(private formBuilder : FormBuilder, private loginService : LoginService,private route:Router) { }

  ngOnInit() {

   this.forgotPwdFrm = this.formBuilder.group({
      email : new FormControl(),
      newPassword : new FormControl(),
      confirmPassword : new FormControl()
    })
    
  }


  forgotPassword(){
    this.response = new ResponseDto();
    this.userDto = new LoginDto();
    let newPassword = this.forgotPwdFrm.value.newPassword;
    let confirmPassword = this.forgotPwdFrm.value.confirmPassword;

    alert(" newPassword "+newPassword+" confirmpassword "+confirmPassword)

    alert(JSON.stringify(newPassword) === JSON.stringify(confirmPassword))
    if(newPassword == confirmPassword){
      this.userDto.email= this.forgotPwdFrm.value.email;
      this.userDto.password = confirmPassword;
   
      this.loginService.changePassword(this.userDto).subscribe(resp =>{
        this.status = resp.json().status;

        if(this.status == 1){
            this.route.navigate(["/login"]);
        }else{
          alert(" Invalid email ID")          
        }

        
      });
    }else{
      alert(" new password and confirm password should match ")
    }
    
  }
}
