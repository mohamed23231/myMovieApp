import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import{Router} from '@angular/router';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService,private _Router:Router) {
   }



   flag:boolean=false;

   errorMessage:string;

   getLoginInfo(loginForm){
      this._AuthService.login(loginForm.value).subscribe((data)=>{
        if(data.message=='success'){
          this._AuthService.saveCurrentUser(data.user.first_name,data.user.last_name,data.user.email,data.token)
          this._Router.navigate(['/home'])
        }
        else
        {
          this.flag=true;
          this.errorMessage =data.message
        }
      })
  }

  loginForm:FormGroup

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      'email':new FormControl(null,[Validators.email]),
      'password':new FormControl(null,[Validators.required ])
    
    });
    

  }

}
