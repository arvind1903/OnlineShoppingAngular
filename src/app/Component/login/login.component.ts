import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../../models/LoginDto';
import { LoginService } from '../../services/login.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetail : LoginDto
  constructor(private loginService : LoginService) { }

  ngOnInit() {
    this.loginDetail = new LoginDto();
  }


  login(){

    console.log(this.loginDetail);

    this.loginService.login(this.loginDetail).subscribe(res=>{
      alert(JSON.stringify(res._body));

      
    })

    return false;

  }
}
