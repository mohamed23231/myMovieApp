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
  isLoading: boolean = false;

  constructor(private _AuthService:AuthService,private _Router:Router) {
   }



   flag:boolean=false;

   errorMessage:string;

   getLoginInfo(loginForm){
     this.isLoading=true;
      this._AuthService.login(loginForm.value).subscribe((data)=>{
        if(data.message=='success'){
          console.log(data.message)
          this._AuthService.saveCurrentUser(data.user.name,data.user.email,data.token)
          this.isLoading=false;
          this._Router.navigate(['/home'])
          
        }
        else
        {
          this.flag=true;
          this.errorMessage =data.message
          this.isLoading=false;

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
